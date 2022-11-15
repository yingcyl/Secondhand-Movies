import React from "react";
import axios from "axios";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";

class App extends React.Component {
  state = { movies: [], genre: new Map() };

  onSearchInput = (term) => {
    console.log(term);

    const request1 = axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1&query=${term}`
    );
    const request2 = axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
    );

    axios.all([request1, request2]).then(
      axios.spread((...res) => {
        const res1 = res[0];
        const res2 = res[1];
        const genres = new Map(res2.data.genres.map((i) => [i.id, i.name]));
        this.setState({ movies: res1.data.results, genres: genres });
      })
    );
  };

  componentDidMount() {}

  render() {
    return (
      <div>
        <div>
          <h1 className="site-header">Secondhand Movies</h1>
        </div>
        <SearchBar onSubmit={this.onSearchInput} />

        <MovieList movies={this.state.movies} genres={this.state.genres} />
      </div>
    );
  }
}

export default App;
