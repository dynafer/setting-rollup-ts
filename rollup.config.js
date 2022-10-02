import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import fs from 'fs';
import path from 'path';

const envPath = path.resolve(__dirname, './.env');
if(!fs.existsSync(envPath)) {
    fs.copyFileSync(path.resolve(__dirname, './env'), envPath);
}

require('dotenv').config({ path: envPath });

const outputPath = path.resolve(__dirname, process.env.OUTPUT_PATH);
const isDevelopment = process.env.MODE === 'development';

export default {
    plugins: [
        typescript({
            tsconfig: path.resolve(__dirname, './tsconfig.json'),
            compilerOptions: {
                sourceMap: isDevelopment
            }
        })
    ],
    input: `./src/${process.env.MAIN_FILE}`,
    output: [
        {
            file: path.resolve(outputPath, `./${process.env.OUTPUT_FILE_NAME}.js`),
            format: 'iife',
            sourcemap: isDevelopment
        },
        {
            file: path.resolve(outputPath, `./${process.env.OUTPUT_FILE_NAME}.min.js`),
            format: 'iife',
            name: 'version',
            plugins: [terser()],
            sourcemap: isDevelopment
        },
    ],
}