# Exposes $ to the Global context. (Requires the expose-loader).
# We don't need to point to the bower_components directory since we included it in resolve.root
require('expose?$!jquery')

# Executes a JavaScript file once in global context (like in script tag).
# Requires are not parsed and the code is not minimized by webpack.
require('script!./plugins/plugin')

# Load a custom module and execute it
require('./modules/common-js')()

# This variable was scoped to the window from component.coffee ^
console.log "Hello from global.coffee"
console.log "window.componentName = #{componentName}"