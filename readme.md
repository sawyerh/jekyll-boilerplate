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

Grunt compiles our SASS for us.

The commands above run this for us, but you can also run just the `grunt` commands if you don't need JS compilation:

**Watch and build SASS when a file changes**:

```
grunt
```

**Build all SASS**:

```
grunt build
```

## Webpack

Our primary use for webpack is the ability to use module systems like AMD and CommonJS, and make it easy for us to bundle our files. Webpack also does a lot of the same things as Grunt and my ultimate goal is to move to a Webpack only workflow.

Again, the `npm run` scripts mentioned above run Webpack for us, but it can also be ran on its own using the `webpack` CLI:

Run once: `webpack`

Run and compress output: `webpack -p`

Run and output with source-maps: `webpack -d`

Run and watch for changes (plus prettier output): `webpack --progress --colors --watch`

**Additional Webpack resources:**
- [CLI docs](http://webpack.github.io/docs/cli.html)
- [webpack-howto](https://github.com/petehunt/webpack-howto)
- [Webpack + Grunt example](https://github.com/webpack/webpack-with-common-libs)