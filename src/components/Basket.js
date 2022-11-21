import { render } from "@testing-library/react";
import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import "./Basket.css";

class Basket extends React.Component {
  state = { show: false };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  totalSum = () => {
    let sum = 0;
    for (let i = 0; i < this.props.cart.length; i++) {
      let price = parseFloat(
        this.props.prices[this.props.cart[i].id].substring(1, 5)
      );
      console.log(price);

      sum += price;
      console.log(sum);
    }
    return sum;
  };

  render() {
    const movies = this.props.cart.map((movie) => {
      const printPrice = this.props.prices[movie.id];
      return (
        <div>
          <ul>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              style={{ width: "150px", height: "auto" }}
            />
          </ul>
          <ul>{movie.title} </ul>
          <ul>{printPrice}</ul>
        </div>
      );
    });

    return (
      <>
        <Button
          variant="primary"
          onClick={this.handleShow}
          style={{ float: "right" }}
        >
          <i className="shopping cart icon"></i>
        </Button>

        <Offcanvas
          placement="end"
          show={this.state.show}
          onHide={this.handleClose}
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title style={{ color: "black" }}>
              Shopping Cart
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ color: "black" }} className="ui divider">
            <div>{movies}</div>
            <div className="ui divider display">
              <div>Total</div>
              <div>{this.totalSum()}</div>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
}

export default Basket;
