import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import path from 'path'
import del from 'rollup-plugin-delete'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'

const production = !process.env.ROLLUP_WATCH

export default [
  {
    input: 'src/mod.ts',
    plugins: [
      commonjs(),
      typescript({ tsconfig: './tsconfig.json', outputToFilesystem: true }),
      postcss({
        config: {
          path: path.resolve('postcss.config.js')
        },
        extract: path.resolve('dist/one.css')
      })
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
    plugins: [
      dts(),
      production && del({ targets: ['dist/types'], hook: 'buildEnd' })
    ],
    output: [
      {
        file: 'dist/mod.d.ts',
        format: 'esm'
      }
    ],
    external: [/\.css$/]
  }
]
