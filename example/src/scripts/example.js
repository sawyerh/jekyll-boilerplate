require('expose?$!jquery'); // Exposes $ to the Global context.
import { sayHello } from './modules/es6.js'; // ES6 import
var sayHelloFromCommonJS = require('./modules/common-js'); // and a CommonJS require
var ExampleComponent = require('./react/example-component');
var React = require('react');
var ReactDOM = require('react-dom');
var counter = 1;

sayHello();
sayHelloFromCommonJS();

$('.log-message').on('click', () => {
  console.log(`Logged message ${counter++} times`);
});

ReactDOM.render(<ExampleComponent />, document.querySelector('.react-container'));