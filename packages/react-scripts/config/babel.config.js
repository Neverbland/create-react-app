module.exports = {
  presets: [
    '@babel/env',
    '@babel/typescript',
    '@babel/react',
    'babel-preset-react-app',
  ],
  plugins: [
    '@babel/proposal-class-properties',
    '@babel/proposal-object-rest-spread',
    'babel-plugin-macros',
  ],
};
