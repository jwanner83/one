import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import del from 'rollup-plugin-delete'
import dts from 'rollup-plugin-dts'

export default [
  {
    input: 'src/mod.ts',
    plugins: [
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', outputToFilesystem: true })
    ],
    output: [
      {
        file: 'dist/mod.js',
        format: 'esm',
        sourcemap: true
      }
    ],
    external: ['jotai', 'react']
  },
  {
    input: 'dist/types/mod.d.ts',
    plugins: [dts(), del({ targets: ['dist/types'], hook: 'buildEnd' })],
    output: [
      {
        file: 'dist/mod.d.ts',
        format: 'esm'
      }
    ]
  }
]
