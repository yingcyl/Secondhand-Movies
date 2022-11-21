import React from "react";
import axios from "axios";
import MovieList from "./MovieList";
import SearchBar from "./SearchBar";
import Basket from "./Basket";
import Filter from "./Filter";

class App extends React.Component {
  state = {
    movies: [],
    genres: {},
    stock: {},
    prices: {},
    cart: [],
  };

  onAddToCart = (movie) => {
    const currentStock = this.state.stock[movie.id];

    if (currentStock > 0) {
      const updatedStock = this.state.stock[movie.id] - 1;
      this.setState(
        {
          stock: { ...this.state.stock, ...{ [movie.id]: updatedStock } },
          cart: [...this.state.cart, movie],
        },
        () => {
          console.log(this.state.cart);
        }
      );
    }
  };

  getMoviePrice = (movie) => {
    if (parseInt(movie.release_date.substring(0, 4)) < 2010) {
      return "£5.99";
    } else {
      return "£8.99";
    }
  };

  getMovieStock = (movie) => {
    if (movie.id > 50000) {
      return 10;
    } else {
      return 6;
    }
  };

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
        // const genres = new Map(
        //   res2.data.genres.map((genre) => [genre.id, genre.name])
        // );
        const genres = {};
        for (let i = 0; i < res2.data.genres.length; i++) {
          genres[res2.data.genres[i].id] = res2.data.genres[i].name;
        }

        const movies = res1.data.results;
        // const movieStock = new Map(
        //   movies.map((movie) => [movie.id, this.movieStock(movie)])
        // );
        const stock = {};
        for (let i = 0; i < movies.length; i++) {
          stock[movies[i].id] = this.getMovieStock(movies[i]);
        }

        // const moviePrices = new Map(
        //   movies.map((movie) => [movie.id, this.moviePrice(movie)])
        // );
        const prices = {};
        for (let i = 0; i < movies.length; i++) {
          prices[movies[i].id] = this.getMoviePrice(movies[i]);
        }

        this.setState(
          {
            movies: movies,
            genres: genres,
            stock: stock,
            prices: prices,
          },
          () => {
            console.log(
              this.state.movies,
              this.state.genres,
              this.state.stock,
              this.state.prices
            );
          }
        );
      })
    );
  };

  render() {
    return (
      <div>
        <div>
          <h1 className="site-header">Secondhand Movies</h1>
        </div>
        <SearchBar onSubmit={this.onSearchInput} />
        <Filter />
        <Basket prices={this.state.prices} cart={this.state.cart} />

        <MovieList
          movies={this.state.movies}
          genres={this.state.genres}
          stock={this.state.stock}
          prices={this.state.prices}
          onAddToCart={this.onAddToCart}
        />
      </div>
    );
  }
}

export default App;
