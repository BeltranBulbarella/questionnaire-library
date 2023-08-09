import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import {terser} from 'rollup-plugin-terser';

export default {
    input: 'src/Questionnaire.tsx',
    output: [
        {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true,
            exports: 'named',
        },
        {
            file: 'dist/index.es.js',
            format: 'esm',
            sourcemap: true,
            exports: 'named',
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        typescript({useTsconfigDeclarationDir: true}),
        terser(),
    ],
};
