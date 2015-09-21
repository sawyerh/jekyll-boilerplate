# Installation

First install all dependencies:

```
npm install
```

Then install the following...

**[Grunt](http://gruntjs.com/): our task runner**

```
npm install -g grunt-cli
```

**[Webpack](http://webpack.github.io/): our module bundler**

```
npm install webpack -g
```

**[Bower](http://bower.io/): our package manager for the web** (*Optional*)

Bower makes fetching and installing packages from all over the web easier. If your project has a `bower.json` (like our example), run: `bower install`

# Build Process

## Grunt

Grunt is our task runner. From the command line we can run a few different commands:

Watch for changes and build our assets when any file changes:

A "build" includes compiling Sass to CSS and running Webpack, which compiles our CoffeeScript to JS, transforms our ES6 syntax, and bundles our files.

```
grunt
```

Run once and build our assets:

```
grunt build
```

Or build certain asset groups:

`grunt sass` or `grunt webpack` (our JS)

## Webpack

Our primary use for webpack is the ability to use module systems like AMD and CommonJS, and make it easy for us to bundle our files. Webpack also does a lot of the same things as Grunt and my ultimate goal is to move to a Webpack only workflow.

Webpack can be run on its own using the `webpack` CLI:

Run once: `webpack`

Run and compress output: `webpack -p`

Run and output with source-maps: `webpack -d`

Run and watch for changes (plus prettier output): `webpack --progress --colors --watch`

**Additional Webpack resources:**
- [CLI docs](http://webpack.github.io/docs/cli.html)
- [webpack-howto](https://github.com/petehunt/webpack-howto)
- [Webpack + Grunt example](https://github.com/webpack/webpack-with-common-libs)