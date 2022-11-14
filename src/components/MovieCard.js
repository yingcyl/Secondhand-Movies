import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React from "react";
import "./MovieCard.css";

class MovieCard extends React.Component {
  render() {
    const { poster_path, title, release_date, id, genre_ids } =
      this.props.movie;
    const genres = genre_ids.map((genre_id) => {
      const genreName = this.props.genre.get(genre_id);
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
          </div>
        </li>
      </div>
    );
  }
}

export default MovieCard;
