// This file doesn't export a module, so when requiring it, we need to use the script-loader
console.log("Hello from plugin.js.");

// Use the Babel loader to allow use of ES6 features:
window.onload = () => {
  console.log('Arrow function fired onload');
}