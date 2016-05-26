var React = require('react')
var ReactDOM = require('react-dom')

var ReactRouter = require('react-router')
var browserHistory = ReactRouter.browserHistory
var Router = ReactRouter.Router
var Route = ReactRouter.Route
var Navigation = ReactRouter.Navigation

var App = React.createClass({
  render: function() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market" />
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
      <header className="top">
        <h1>
          Catch
          <span className="ofThe">
            <span className="of">of</span>
            <span className="the">the</span>
          </span>
          Day
        </h1>
        <h3 className="tagline"><span>{this.props.tagline}</span></h3>
      </header>
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
      <form className="store-selector">
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" required />
        <input type="Submit" />
      </form>
    )
  }
})

var NotFound = React.createClass({
  render: function() {
    return (
      <h1>404 Not Found</h1>
    )
  }
})

var routes = (
  <Router history={browserHistory}>
    <Route path="/" component={StorePicker} />
    <Route path="/store/:slug" component={App} />
    <Route path="*" component={NotFound} />
  </Router>
)

ReactDOM.render(routes, document.querySelector('#main'))
