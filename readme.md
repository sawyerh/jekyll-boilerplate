This repo includes a boilerplate for getting started working on a new Jekyll website, setup for GitHub Pages. It includes the following, which I tend to need on any site I work on:

- Package management using NPM
- [ESLint](http://eslint.org/) + [Stylelint](https://stylelint.io/)
- JS testing using [Jest](http://facebook.github.io/jest/)
- Automatic code and Markdown formatting using [Prettier](https://prettier.io/)
- Git hooks using [Husky](https://www.npmjs.com/package/husky)
- ES6 transpiling and bundling using Webpack and Babel
- Sass transpiling and processing using PostCSS
- Local server and live reloading using [Browsersync](https://www.browsersync.io)

# Prerequisites

- Node 10.x +
- Ruby 2.4.x +

# Installation

```
npm install && bundle install
```

# Usage

### Local development

You can run a local Jekyll server and enjoy live reloading by running the following:

```
npm start
```

### Building production-ready assets

To transpile and bundle Sass and JS, run the following:

```
npm run build
```

# Testing

```
npm test
```
