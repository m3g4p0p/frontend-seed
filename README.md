# Frontend seed

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## What's included

- webpack
  - dev-server / HMO
  - SASS
- babel
  - presets:
    - env
  - plugins:
    - proposal-object-rest-spread
    - proposal-class-properties
- karma
  - jasmine
  - PhantomJS

## Usage

- Run tests:

```bash
yarn test
```

- Run tests and then build in production mode:

```bash
yarn build
```

- Start dev server with HMO and concurrently run tests:

```bash
yarn start
```
