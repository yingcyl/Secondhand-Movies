import { render } from "@testing-library/react";
import React from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import CartButton from "./CartButton";

class Basket extends React.Component {
  state = { show: false };

  handleShow = () => {
    this.setState({ show: true });
  };

  handleClose = () => {
    this.setState({ show: false });
  };

  render() {
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
              Offcanvas
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body style={{ color: "black" }}>
            Stock: {this.props.stock}
            Price: {this.props.prices}
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
            <CartButton onDisplay={this.onDisplay} />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
}

export default Basket;
