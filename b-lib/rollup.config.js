import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'index.js',
  output: {
    file: 'dist/bundle-rollup.js',
    format: 'iife',
    name: 'treeShake'
  },
  plugins: [resolve()]
};
