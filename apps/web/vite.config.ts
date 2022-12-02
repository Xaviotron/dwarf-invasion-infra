import solid from "solid-start/vite";
import { defineConfig } from "vite";
import path from "path";
import dotenv from "dotenv";

export default defineConfig(() => {
    dotenv.config();
    return {
        plugins: [solid()],
        resolve: {
            alias: {
                utils: path.resolve(__dirname, "../../packages/utils"),
            },
        },
    };
});
