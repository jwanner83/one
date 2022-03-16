

export default {
    input: 'src/mod.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true,
            name: 'react-lib'
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        }
    ],
    plugins: [
        commonjs(),
        typescript({ tsconfig: '../../tsconfig.json' }),
    ]
}