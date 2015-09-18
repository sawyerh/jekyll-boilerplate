# When this component is required within another script, this plugin will only be included once:
require('script!../js/plugin')

name = 'Component 1'

# Window scoped variables will still work outsite of this script:
window.componentName = name

# Export so we can require() it from other scripts:
module.exports = ->
  console.log('Hello from ' + name)
