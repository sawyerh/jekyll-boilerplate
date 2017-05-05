# Installation

_Note: The instructions are targeted towards using Yarn, but you could also use NPM._

```
yarn install && bundle install
```

# Usage

### Local development

You can run a local Jekyll server and enjoy live reloading via Browsersync by running the following:

```
yarn start
```

### Building production-ready assets

To transpile and bundle Sass and JS, run the following:

```
yarn run build
```

# Testing

This project is setup to use [Jest](http://facebook.github.io/jest/) for JavaScript unit tests, ESLint for JS linting, and Stylelint for Sass linting.

To run linting and tests, run:

```
yarn test
```
