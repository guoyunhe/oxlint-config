# @guoyunhe/oxlint-config

A shared configuration for [oxlint](https://oxc.rs/docs/guide/usage/linter.html) by Guo Yunhe.

## Installation

```bash
npm install --save-dev @guoyunhe/oxlint-config oxlint
```

## Usage

Create an `oxlint.json` in your project root:

```json
{
  "extends": ["@guoyunhe/oxlint-config"]
}
```

The config extends [oxlint-config-recommended](https://www.npmjs.com/package/oxlint-config-recommended),
which includes Oxlint-supported rules from ESLint, Unicorn, and TypeScript's
recommended sets.

## License

[MPL-2.0](LICENSE)
