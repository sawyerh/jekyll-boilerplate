# Installation

**[Webpack](http://webpack.github.io/): module bundler**

1. To use the `webpack` CLI, install webpack globally: `npm install webpack -g`
2. Install dependencies: `npm install`

**[Bower](http://bower.io/): package manager for the web** (optional)

Bower makes fetching and installing packages from all over the web easier. If your project has a `bower.json` (like our example), run: `bower install`

# Webpack

Run once:

```
webpack
```

Run and compress output:

```
webpack -p
```

Run and output with source-maps:

```
webpack -d
```

Run and watch for changes (plus prettier output):

```
webpack --progress --colors --watch
```

**Additional resources:**

- [webpack-howto](https://github.com/petehunt/webpack-howto)