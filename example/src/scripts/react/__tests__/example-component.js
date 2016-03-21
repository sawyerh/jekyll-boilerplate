jest.unmock('../example-component');

var ExampleComponent = require('../example-component');
var React = require('react');
var ReactDOM = require('react-dom');
var TestUtils = require('react-addons-test-utils');

describe('Example component', () => {
  it('should output hello world text', () => {
    const reactComponent = TestUtils.renderIntoDocument(
      <ExampleComponent />
    );
    const reactNode = ReactDOM.findDOMNode(reactComponent);
    expect(reactNode.textContent).toBe('Hello world, this is a React component.');
  });
});