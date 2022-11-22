import React from "react";
import { formatPrice } from "../helpers";
import propTypes from 'prop-types';

class Fish extends React.Component {

  static propTypes = {
    details: propTypes.shape({
      image: propTypes.string,
      name: propTypes.string,
      price: propTypes.number,
      desc: propTypes.string,
      status: propTypes.string
    }),
    addToOrder: propTypes.func,
  }

    handleClick = () => {
        this.props.addToOrder(this.props.index);
    }
  render() {
    const { image, name, desc, price, status } = this.props.details;
    const isAvailable = status === "available";

    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={this.handleClick}>
          {isAvailable ? "Add To Order" : "Sold Out!"}
        </button>
      </li>
    );
  }
}

export default Fish;
