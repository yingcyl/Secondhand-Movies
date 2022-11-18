import React from "react";
import "./MovieCard.css";

class CartButton extends React.Component {
  state = { stock1: null, price1: "" };

  onButtonClick = (props) => {
    console.log(this.props.stock.props.children);
    console.log(this.props.price.props.children);
    this.setState({
      stock1: this.props.stock.props.children,
      price1: this.props.price.props.children,
    });

    this.props.onClick();
  };

  // onEnter = () => {
  //   console.log(this.state.price);
  //   console.log(this.state.stock);
  // };

  render() {
    return (
      <button
        className="ui button buy-button"
        onClick={this.onButtonClick}
        // onKeyDown={this.onEnter}
      >
        Add to cart
      </button>
    );
  }
}

export default CartButton;
