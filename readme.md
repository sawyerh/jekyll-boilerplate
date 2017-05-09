This repo includes a boilerplate for getting started working on a new Jekyll website. It includes the following, which I tend to need on any site I work on:

- Package management using Yarn
- Linting using [ESLint](http://eslint.org/) + [Stylelint](https://stylelint.io/)
- JS testing using [Jest](http://facebook.github.io/jest/)
- ES6 transpiling and bundling using Webpack and Babel
- Sass transpiling and processing using Gulp and PostCSS
- Local server and live reloading using [Browsersync](https://www.browsersync.io)

# Installation

_Note: The instructions are targeted towards using Yarn, but you could also use NPM._

```
yarn install && bundle install
```

# Usage

### Local development

You can run a local Jekyll server and enjoy live reloading by running the following:

```
yarn start
```

### Building production-ready assets

To transpile and bundle Sass and JS, run the following:

```
yarn run build
```

# Testing and linting

To run linting and tests, run:

```
yarn test
```
