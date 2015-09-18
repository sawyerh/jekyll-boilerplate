# Include item.scss styles in the <head>:
require('item.scss')

console.log 'Hello from an item'
counter = 1

$('.log-message').on 'click', ->
  console.log("Logged message #{counter++}")