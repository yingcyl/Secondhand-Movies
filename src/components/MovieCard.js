import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import CartButton from "./CartButton";
import "./MovieCard.css";

class MovieCard extends React.Component {
  state = { stock: {}, price: "" };

  //   onButtonClick = (price1, stock1) => {
  //     console.log(price);
  //     this.props.onClick(this.state.stock);
  //     this.props.onClick(this.state.price);
  //   };

  onButtonClick = () => {
    console.log(this.state.stock);
    console.log(this.state.price);
    this.props.onClick(this.state.stock, this.state.price);
  };

  render() {
    const { poster_path, title, release_date, id, genre_ids, popularity } =
      this.props.movie;
    const genres = genre_ids.map((genre_id) => {
      const genreName = this.props.genre.get(genre_id);
      // lists within lists will need unique keys as well
      return <ul key={genre_id}>{genreName}</ul>;
    });

    const price = function moviePrice() {
      let moviePrice;
      if (parseInt(release_date.substring(0, 4)) < 2010) {
        moviePrice = "£5.99";
        return <ul>{moviePrice}</ul>;
      } else {
        moviePrice = "£8.99";
        return <ul>{moviePrice}</ul>;
      }
    };

    const stock = function movieStock() {
      let movieStock;
      if (id > 50000) {
        movieStock = 10;
        return <ul>{movieStock}</ul>;
      } else {
        movieStock = 6;
        return <ul>{movieStock}</ul>;
      }
    };

    return (
      <div className="movie-card">
        <li>
          <ul>
            <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} />
          </ul>
          <div className="movie-details">
            <ul>{title}</ul>
            <ul>{release_date}</ul>
            {genres}
            {price()}
            {stock()}
            {/* <CartButton
              price={price()}
              stock={stock()}
              onClick={() => {
                console.log(stock().props.children);
                this.setState({
                  stock: stock().props.children,
                  price: price().props.children,
                });
              }}
              onButtonClick={this.onButtonClick}
            /> */}

            <button
              className="ui button buy-button"
              onClick={(e) => {
                console.log(stock().props.children);
                this.setState(
                  {
                    stock: stock().props.children,
                    price: price().props.children,
                  },
                  // callback for when setstate is complete, code didn't work when this.props.onclick is done outside of the setstae function
                  () => {
                    console.log(this.state.stock);
                    console.log(this.state.price);
                    this.props.onClick(this.state.stock, this.state.price);
                  }
                );
                this.onButtonClick();
              }}
            >
              Add to cart
            </button>
          </div>
        </li>
      </div>
    );
  }
}

export default MovieCard;
