import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import "./MovieCard.css";

class MovieCard extends React.Component {
  render() {
    const { poster_path, title, release_date, id, genre_ids, popularity } =
      this.props.movie;
    const genres = genre_ids.map((genre_id) => {
      const genreName = this.props.genre.get(genre_id);
      // lists within lists will need unique keys as well
      return <ul key={genre_id}>{genreName}</ul>;
    });
    console.log(release_date.substring(0, 4));
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
        return <ul>In stock: {movieStock}</ul>;
      } else {
        movieStock = 6;
        return <ul>In stock: {movieStock}</ul>;
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
          </div>
        </li>
      </div>
    );
  }
}

export default MovieCard;
