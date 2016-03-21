# Installation

First install all dependencies:

```
npm install
```

Then install the following...

**[Grunt](http://gruntjs.com/): our task runner**

```
npm install grunt-cli -g
```

**[Webpack](http://webpack.github.io/): our module bundler**

```
npm install webpack -g
```

# Build Process

**Building Production-ready assets**

```
npm run build
```

**While developing**:

```
npm run dev
```

This does two things:

1. Watches for changes and fires Livereload
2. Builds assets in "Development" mode. You'll see more helpful errors in the console and makes things generally easier to debug.

To use Livereload, install the [Chrome or Safari extension](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-).

## Grunt

Grunt compiles our Sass for us.

The commands above run this for us, but you can also run just the `grunt` commands if you don't need JS bundling:

**Watch and build Sass when a file changes**:

```
grunt
```

**Build all SASS**:

```
grunt build
```

## Webpack

I use Webpack to transform and bundle the JavaScript. This allows you to use ES6 syntax and `require` or `import` modules.

Again, the `npm run` scripts mentioned above run Webpack for us, but it can also be ran on its own using the `webpack` CLI:

Run once: `webpack`

Run and compress output: `webpack -p`

Run and output with source-maps: `webpack -d`

Run and watch for changes (plus prettier output): `webpack --progress --colors --watch`

**Additional Webpack resources:**
- [CLI docs](http://webpack.github.io/docs/cli.html)
- [webpack-howto](https://github.com/petehunt/webpack-howto)
- [Webpack + Grunt example](https://github.com/webpack/webpack-with-common-libs)

## Jest

[Jest](http://facebook.github.io/jest/) is used for JavaScript unit testing. See the example project for a quick test example.

To run the tests:

```
npm run test
```