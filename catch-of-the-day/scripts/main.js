var React = require('react');
var ReactDOM = require('react-dom');

var App = React.createClass({
  render: function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header />
        </div>
        <Order />
        <Inventory />
      </div>
    )
  }
})

var Header = React.createClass({
  render: function() {
    return (
      <p>Header</p>
    )
  }
})

var Order = React.createClass({
  render: function() {
    return (
      <p>Order</p>
    )
  }
})

var Inventory = React.createClass({
  render: function() {
    return (
      <p>Inventory</p>
    )
  }
})

var StorePicker = React.createClass({
  render: function() {
    return (
      <p>hello</p>
    )
  }
});

ReactDOM.render(<App/>, document.querySelector('#main'));
