# Exposes jQuery as $ to the Global context.
# Requires the expose-loader.
require('expose?$!../bower_components/jquery/dist/jquery')

# Evaluates code in the global context, just like you would add the code into a script tag.
# The required code is not minimized by webpack.
require('script!./js/plugin')

# Load a custom module and execute it
require('./my-components/component-1.coffee')()

# This variable was scoped to the window from component-1.coffee ^
console.log componentName
console.log("Hello world, this is coffee that's being watched with --watch")