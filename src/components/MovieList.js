import React from "react";
import Basket from "./Basket";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  render() {
    const movies = this.props.movies.map((movie) => {
      const movieStock = this.props.stock[movie.id];
      const moviePrice = this.props.prices[movie.id];

      if (
        movie.poster_path === null ||
        movie.release_date == "" ||
        movie.genre_ids.length == 0
      ) {
        return false;
      } else {
        return (
          <MovieCard
            key={movie.id}
            movie={movie}
            genre={this.props.genres}
            stock={movieStock}
            price={moviePrice}
            onAddToCart={this.props.onAddToCart}
          />
        );
      }
    });
    return <div>{movies}</div>;
  }
}

export default MovieList;
