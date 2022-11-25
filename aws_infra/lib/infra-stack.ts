import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { HttpApi } from "@aws-cdk/aws-apigatewayv2-alpha";
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import * as events from 'aws-cdk-lib/aws-events';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { getAssetPath } from '../utils';
import { config } from "dotenv";
config();

export class InfraStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const prefix = "dwarfinvasion";
    const role = new iam.Role(this, `${prefix}-eventbridge-role`, {
        assumedBy: new iam.ServicePrincipal('scheduler.amazonaws.com'),
    });

    const bucket = new s3.Bucket(this, `${prefix}-bucket`, {
        bucketName: "dwarf-invasion",
        removalPolicy: cdk.RemovalPolicy.DESTROY,
        publicReadAccess: true
    });

    const aggregatorHandler = new lambda.Function(this, `${prefix}-sim-aggregator-handler`, {
            functionName: `${prefix}-sim-aggregator-handler`,
            runtime: lambda.Runtime.NODEJS_16_X,
            handler: "index.handler",
            memorySize: 1024,
            code: lambda.Code.fromAsset(getAssetPath('simAggregator', 'node')),
            architecture: lambda.Architecture.X86_64,
            environment: {
                BUCKET_URL: bucket.urlForObject(),
                BUCKET_NAME: bucket.bucketName,
                DISCORD_WH_URL: process.env.DISCORD_WH_URL!
            },
            description:
                "This is the handler for aggregating the results of the sims and posting them",
    });
    role.addToPolicy(new iam.PolicyStatement({
        actions: ['lambda:InvokeFunction'],
        resources: [aggregatorHandler.functionArn],
    }));

    const simCreatorHandler = new lambda.Function(this, `${prefix}-sim-creator-handler`, {
            functionName: `${prefix}-sim-creator-handler`,
            runtime: lambda.Runtime.NODEJS_16_X,
            handler: "index.handler",
            memorySize: 1024,
            code: lambda.Code.fromAsset(getAssetPath('simCreator', 'node')),
            architecture: lambda.Architecture.X86_64,
            environment: {
                SIM_AGGREGATOR_ARN: aggregatorHandler.functionArn,
                ROSTER_URL: bucket.urlForObject("roster.json"),
                EVENT_ROLE_ARN: role.roleArn
            },
            description:
                "This is the handler for initating sims against the raidbot api and create the scheduler",
    });

    // Add policy to allow the lambda to control eventbridge
    simCreatorHandler.addToRolePolicy(new iam.PolicyStatement({
        actions: [
            "scheduler:CreateSchedule",
            "iam:PassRole"
        ],
        resources: ["*"],
    }));

    const webhookHandler = new lambda.Function(this, `${prefix}-api-handler`, {
            functionName: `${prefix}-backend-handler`,
            runtime: lambda.Runtime.PROVIDED_AL2,
            handler: "not.required",
            memorySize: 1024,
            code: lambda.Code.fromAsset(getAssetPath('backend', 'rust')),
            architecture: lambda.Architecture.X86_64,
            environment: {
                RUST_BACKTRACE: "1",
                DISCORD_APP_ID: "1044438772042956861"
            },
            description:
                "Bot for Dwarf Invasion Discord server Slash command integration",
    });

    // Trigger the sim creator lambda every week (the 5 am is to make sure that on NA
    // there isn't a lot of people simming on RaidBots)
    const simSchedule = new events.Rule(this, `${prefix}-schedule`, {
        // Every friday at 5 am EST
        schedule: events.Schedule.expression('cron(0 10 ? * FRI *)'),
        targets: [new targets.LambdaFunction(simCreatorHandler)],
    });

    // Add lambda permissions to write to S3
    bucket.grantWrite(webhookHandler);
    bucket.grantWrite(aggregatorHandler);

    bucket.grantRead(webhookHandler);
    bucket.grantRead(aggregatorHandler);

    const api = new HttpApi(this, `${prefix}-http-api`, {
        apiName: `${prefix}-backend-api`,
        description: 'Bot for Dwarf Invasion Discord server Slash command integration',
            defaultIntegration: new HttpLambdaIntegration('DwarfInvasionBotApiIntegration', 
                webhookHandler,
           )
    });
    const xav_user = iam.User.fromUserName(this, `${prefix}-xav-user`, "xavier");
    const user_contributor_policy = new iam.Policy(this, `${prefix}-user-contributor-policy`, {
        policyName: `${prefix}-user-contributor-policy`,
        statements: [
            new iam.PolicyStatement({
                actions: [
                    "s3:*"
                ],
                resources: [
                    bucket.bucketArn,
                    bucket.bucketArn + "/*"
                ]
            })
        ]
    });
    user_contributor_policy.attachToUser(xav_user);
    // implement the role from eventbridge to invoke the lambda
    new cdk.CfnOutput(this, `${prefix}-api-url`, {
        value: api.url!,
        description: "URL for the API",
    });
    new cdk.CfnOutput(this, `${prefix}-sim-creator-handler-role`, {
        value: simCreatorHandler.role?.roleArn!,
        description: "Role for the sim creator handler",
    });
    new cdk.CfnOutput(this, `${prefix}-rule-role`, {
        value: role.roleArn,
        description: "Role for the eventbridge rules created by the sim creator handler",
    });
  }
}
