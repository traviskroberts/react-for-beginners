import React from 'react'
import { browserHistory } from 'react-router'
import helpers from '../helpers'

class StorePicker extends React.Component {
  goToStore(e) {
    e.preventDefault()
    var storeId = this.refs.storeId.value
    browserHistory.push('/store/' + storeId)
  }

  render() {
    return (
      <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
        <h2>Please Enter A Store</h2>
        <input type="text" ref="storeId" defaultValue={helpers.getFunName()} required />
        <input type="Submit" />
      </form>
    )
  }
}

export default StorePicker
