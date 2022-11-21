import React from "react";
import { Dropdown } from "semantic-ui-react";

class Filter extends React.Component {
  onChange = (e) => {
    console.log(e.target.innerText);
  };
  render() {
    const genreOptions = [
      {
        key: 12,
        text: "Adventure",
        value: "Adventure",
      },
      {
        key: 14,
        text: "Fantasy",
        value: "Fantasy",
      },
      {
        key: 16,
        text: "Animation",
        value: "Animation",
      },
      {
        key: 18,
        text: "Drama",
        value: "Drama",
      },
      {
        key: 27,
        text: "Horror",
        value: "Horror",
      },
      {
        key: 28,
        text: "Action",
        value: "Action",
      },
      {
        key: 35,
        text: "Comedy",
        value: "Comedy",
      },
      {
        key: 36,
        text: "History",
        value: "History",
      },
      {
        key: 37,
        text: "Western",
        value: "Western",
      },
      {
        key: 53,
        text: "Thriller",
        value: "Thriller",
      },
      {
        key: 80,
        text: "Crime",
        value: "Crime",
      },
      {
        key: 99,
        text: "Documentary",
        value: "Documentary",
      },
      {
        key: 878,
        text: "Science Fiction",
        value: "Science Fiction",
      },
      {
        key: 9648,
        text: "Mystery",
        value: "Mystery",
      },
      {
        key: 10402,
        text: "Music",
        value: "Music",
      },
      {
        key: 10749,
        text: "Romance",
        value: "Romance",
      },
      {
        key: 10751,
        text: "Family",
        value: "Family",
      },
      {
        key: 10752,
        text: "War",
        value: "War",
      },
      {
        key: 10770,
        text: "TV Movie",
        value: "TV Movie",
      },
    ];

    return (
      <div style={{ display: "inline", marginLeft: "60%" }}>
        <Dropdown
          placeholder="Select Genre"
          selection
          options={genreOptions}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

export default Filter;
