import { join } from "path";
import { existsSync } from "fs";

const NODE_BASE_PATH = join("dist");
const RUST_BASE_PATH = join("target", "lambda");
const BASE_PATH = join(__dirname, "..");

export const getAssetPath = (func_name: string, type: 'rust' | 'node') => {
    const path = join(BASE_PATH, func_name);

    if (!existsSync(path)) {
        throw new Error(
            `Function ${func_name} does not exist under ${path}`
        );
    }

    const artifact_path = type === 'rust' ? join(path, RUST_BASE_PATH, func_name, "bootstrap.zip") : join(path, NODE_BASE_PATH);
    if (!existsSync(artifact_path)) {
        throw new Error(
            `Function ${func_name} does not have a build under ${artifact_path}`
        );
    }

    return artifact_path;
};
