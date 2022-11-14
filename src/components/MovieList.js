import React from "react";
import MovieCard from "./MovieCard";

const MovieList = (props) => {
  const movies = props.movies.map((movie) => {
    console.log(movie);
    // const genres = movie.genre_ids.map((id) => {
    //   const genreName = props.genres.get(id);
    //   return genreName;
    // });
    return <MovieCard key={movie.id} movie={movie} genre={props.genres} />;
  });
  return <div>{movies}</div>;
};

export default MovieList;
