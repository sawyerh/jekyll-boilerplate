# This plugin will only be included once if it's require()'ed from multiple components:
require('script!../plugins/plugin')

# Window scoped variables will still work outside of this script:
window.componentName = 'Component'

# Export so we can require() it from other scripts:
module.exports = ->
  console.log('Hello from component.coffee')
