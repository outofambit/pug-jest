# pug-jest

Transform your [.pug](https://github.com/pugjs/pug) files to HTML for running
[Jest](https://github.com/facebook/jest) with markup templates

## Usage

```
npm install pug-jest --save-dev
```

## Setup

Define `pug-jest` as a transformer for Jest, by adding
the following to your Jest configuration in your `package.json`:

```json
{
  "jest": {
    "transform": {
      "\\.(pug)$": "<rootDir>/node_modules/pug-jest"
    }
  }
}
```
