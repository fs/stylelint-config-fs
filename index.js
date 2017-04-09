module.exports = {
  plugins: [
    'stylelint-order'
  ],
  extends: [
    './rules/base'
  ].map(require.resolve)
};
