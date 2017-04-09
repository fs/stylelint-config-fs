# stylelint-config-fs

This package provides Flatstack's CSS Stylelint config as an extensible shared config.

## Usage

1. Install stylelint-config-fs package

Via npm:
```bash
npm install stylelint-config-fs --save-dev
```

Via yarn:
```bash
yarn add stylelint-config-fs --dev
```

2. Add `"extends": "stylelint-config-fs"` to your .stylelintrc

```bash
{
  "extends": "stylelint-config-fs",
  "rules": {
    // you can override some of the rules below
    'indentation': 3
    ...
  }
}
```

## Credits

Stylelint-config-fs is maintained by [Marat Fakhreev](http://github.com/maratfakhreev).
It was written by [Flatstack](http://www.flatstack.com) with the help of our
[contributors](http://github.com/fs/stylelint-config-fs/contributors).

[<img src="http://www.flatstack.com/logo.svg" width="100"/>](http://www.flatstack.com)
