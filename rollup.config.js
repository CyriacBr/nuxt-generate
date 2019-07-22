import typescript from 'rollup-plugin-typescript2';
import pkg from './package.json';
import json from 'rollup-plugin-json';

export default {
  input: 'src/script.ts',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      banner: '#!/usr/bin/env node'
    }
  ],
  external: [...Object.keys(pkg.dependencies || {}), ...Object.keys(pkg.peerDependencies || {})],
  plugins: [
    json(),
    typescript({
      typescript: require('typescript')
    })
  ]
};
