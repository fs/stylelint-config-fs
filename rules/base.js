const order = require('./order/order');
const propertiesOrder = require('./order/properties');

const config = {
  'rules': {
    'at-rule-no-unknown': [true, { ignoreAtRules: ['define-mixin', 'mixin'] }],
    'block-no-empty': true,
    'color-hex-case': 'lower',
    'color-no-invalid-hex': true,
    'declaration-block-no-duplicate-properties': true,
    'declaration-block-no-redundant-longhand-properties': true,
    'declaration-block-no-shorthand-property-overrides': true,
    'declaration-block-trailing-semicolon': 'always',
    'declaration-colon-space-after': 'always',
    'declaration-colon-space-before': 'never',
    'declaration-empty-line-before': 'never',
    'declaration-no-important': true,
    'font-family-name-quotes': 'always-where-recommended',
    'function-comma-space-after': 'always',
    'function-url-quotes': 'always',
    'indentation': [2, { ignore: ['value'] }],
    'length-zero-no-unit': true,
    'max-nesting-depth': [3, { 'ignore': ['blockless-at-rules'] }],
    'media-feature-colon-space-after': 'always',
    'media-feature-colon-space-before': 'never',
    'media-feature-name-no-unknown': true,
    'media-feature-name-no-vendor-prefix': true,
    'no-duplicate-selectors': true,
    'no-extra-semicolons': true,
    'no-missing-end-of-source-newline': true,
    'no-unknown-animations': true,
    'number-leading-zero': 'never',
    'number-no-trailing-zeros': true,
    'order/order': order,
    'order/properties-order': [propertiesOrder, { unspecified: 'bottom' }],
    'property-case': 'lower',
    'property-no-unknown': true,
    'property-no-vendor-prefix': true,
    'rule-empty-line-before': ['always-multi-line', { except: ['first-nested'] }],
    'selector-descendant-combinator-no-non-space': true,
    'selector-list-comma-newline-after': 'always',
    'selector-no-id': true,
    'selector-no-qualifying-type': true,
    'selector-pseudo-class-no-unknown': true,
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-element-no-unknown': true,
    'selector-type-no-unknown': true,
    'string-no-newline': true,
    'string-quotes': 'double',
    'time-min-milliseconds': 100,
    'unit-case': 'lower',
    'unit-no-unknown': true,
    'value-keyword-case': 'lower',
    'value-no-vendor-prefix': true
  }
};

// Dirty solution which allows to use stylefmt with stylelint-order plugin
// Refert to https://github.com/hudochenkov/postcss-sorting/issues/47
if (process.argv.find((value, key) => value.includes('stylefmt'))) {
  delete config.rules['order/order'];
}

module.exports = config;
