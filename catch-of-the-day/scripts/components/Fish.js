import React from 'react'
import helpers from '../helpers'

class Fish extends React.Component {
  onButtonClick() {
    this.props.addToOrder(this.props.index)
  }

  render() {
    let fish = this.props.details
    let isAvailable = (fish.status === 'available')
    let buttonText = isAvailable ? 'Add to Cart' : 'Sold Out!'

    return (
      <li className="menu-fish">
        <img src={fish.image} alt={fish.name} />
        <h3 className="fish-name">
          {fish.name}
          <span className="price">{helpers.formatPrice(fish.price)}</span>
        </h3>
        <p>{fish.desc}</p>
        <button disabled={!isAvailable} onClick={this.onButtonClick.bind(this)}>
          {buttonText}
        </button>
      </li>
    )
  }
}

Fish.propTypes = {
  addToOrder: React.PropTypes.func.isRequired,
  details: React.PropTypes.object.isRequired,
  index: React.PropTypes.string.isRequired
}

export default Fish
