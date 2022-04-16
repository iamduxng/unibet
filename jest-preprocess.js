const babelOptions = {
  presets: ['next/babel'],
  plugins: ['@emotion/babel-plugin', 'babel-plugin-macros']
};

const transformer = require('babel-jest').default;
module.exports = transformer.createTransformer(babelOptions);
