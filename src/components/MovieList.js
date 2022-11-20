import React from "react";
import Basket from "./Basket";
import MovieCard from "./MovieCard";

class MovieList extends React.Component {
  //   state = { stock: {}, price: "" };

  //   onClick = (stock, price) => {
  //     this.setState({ stock: stock, price: price });
  //     this.props.onClick(this.state.stock, this.state.price);
  //   };

  render() {
    const movies = this.props.movies.map((movie) => {
      // const genres = movie.genre_ids.map((id) => {
      //   const genreName = props.genres.get(id);
      //   return genreName;
      // });(
      const movieStock = this.props.stock.get(movie.id);
      const moviePrice = this.props.prices.get(movie.id);

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
            onClick={this.props.onClick}
          />
        );
      }
    });
    return <div>{movies}</div>;
  }
}

export default MovieList;
