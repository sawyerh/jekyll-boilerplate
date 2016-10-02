# Installation

```
npm install
```

and

```
bundle install
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

Grunt watches for changes and lints our `.scss` files for us.

The commands above run this for us, but you can also run just the `grunt` commands if you don't need JS bundling:

## Webpack

I use Webpack to transform and bundle the JavaScript. This allows you to use ES6 syntax and `require` or `import` modules.

**Additional Webpack resources:**
- [CLI docs](http://webpack.github.io/docs/cli.html)
- [webpack-howto](https://github.com/petehunt/webpack-howto)
- [Webpack + Grunt example](https://github.com/webpack/webpack-with-common-libs)

## Jest

[Jest](http://facebook.github.io/jest/) is used for JavaScript unit testing. See the example project for a quick test example.

To run the tests:

```
npm test
```