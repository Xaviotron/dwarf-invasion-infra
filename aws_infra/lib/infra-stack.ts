import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { HttpApi } from "@aws-cdk/aws-apigatewayv2-alpha";
import { HttpLambdaIntegration } from '@aws-cdk/aws-apigatewayv2-integrations-alpha';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as iam from 'aws-cdk-lib/aws-iam';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { getAssetPath } from '../utils';

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


    // Add lambda permissions to write to S3
    bucket.grantWrite(webhookHandler);
    bucket.grantWrite(webhookHandler);
    bucket.grantRead(aggregatorHandler);
    bucket.grantRead(aggregatorHandler);

    const api = new HttpApi(this, `${prefix}-http-api`, {
        apiName: `${prefix}-backend-api`,
        description: 'Bot for Dwarf Invasion Discord server Slash command integration',
            defaultIntegration: new HttpLambdaIntegration('DwarfInvasionBotApiIntegration', 
                webhookHandler,
           )
    });
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
