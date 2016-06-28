import React from 'react'
import AddFishForm from './AddFishForm'

class Inventory extends React.Component {
  renderInventory(key) {
    return (
      <div className="fish-edit" key={key}>
        <input type="text" valueLink={this.props.linkState('fishes.' + key + '.name')} />
        <input type="text" valueLink={this.props.linkState('fishes.' + key + '.price')} />
        <select valueLink={this.props.linkState('fishes.' + key + '.status')}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea type="text" valueLink={this.props.linkState('fishes.' + key + '.desc')}></textarea>
        <input type="text" valueLink={this.props.linkState('fishes.' + key + '.image')} />
        <button onClick={this.props.removeFish.bind(null, key)}>Remove Fish</button>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h2>Inventory</h2>

        {Object.keys(this.props.fishes).map(this.renderInventory.bind(this))}
        <AddFishForm addFish={this.props.addFish} />
        <button onClick={this.props.loadSamples}>Load Sample Fishes</button>
      </div>
    )
  }
}

Inventory.propTypes = {
  addFish: React.PropTypes.func.isRequired,
  removeFish: React.PropTypes.func.isRequired,
  loadSamples: React.PropTypes.func.isRequired,
  fishes: React.PropTypes.object.isRequired,
  linkState: React.PropTypes.func.isRequired
}

export default Inventory
