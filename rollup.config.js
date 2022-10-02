import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';
import path from 'path';
require('dotenv').config({ path: './.env' });

const outputPath = path.resolve(__dirname, process.env.OUTPUT_PATH);
const isDevelopment = process.env.ENVIRONMENT === 'development';

export default {
    plugins: [
        typescript({
            tsconfig: './tsconfig.json'
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