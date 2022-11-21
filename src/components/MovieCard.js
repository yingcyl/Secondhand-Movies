import {
  toHaveDisplayValue,
  toHaveStyle,
} from "@testing-library/jest-dom/dist/matchers";
import React from "react";

import "./MovieCard.css";

class MovieCard extends React.Component {
  state = { stock: this.props.stock, price: this.props.price };

  onButtonClick = (movie) => {
    this.props.onAddToCart(movie);
  };

  render() {
    const { poster_path, title, release_date, id, genre_ids, popularity } =
      this.props.movie;
    const genres = genre_ids.map((genre_id) => {
      const genreName = this.props.genre[genre_id];
      // lists within lists will need unique keys as well
      return <ul key={genre_id}>{genreName}</ul>;
    });

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
            <ul>{`Price: ${this.props.price}`}</ul>
            <ul>{`In stock: ${this.props.stock}`}</ul>

            <button
              className="ui button buy-button"
              onClick={() => this.onButtonClick(this.props.movie)}
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
