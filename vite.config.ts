import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
// @ts-ignore
import {devPlugin, getReplacer} from './plugins/devPlugin';
import path, { join } from 'path'
import optimizer from "vite-plugin-optimizer";
import {buildPlugin} from "./plugins/buildPlugin";


// https://vitejs.dev/config/
export default defineConfig({
    plugins: [optimizer(getReplacer()), devPlugin(), vue()],
    build: {
        rollupOptions: {
            plugins: [buildPlugin()],
        }
    },
    resolve: {
        alias: {
            '@': join(__dirname, '/src')
        }
    }
})
