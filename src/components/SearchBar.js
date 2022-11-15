import React from "react";

class SearchBar extends React.Component {
  state = { term: "" };

  onFormSubmit = (e) => {
    e.preventDefault();
  };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
    //   referencing the prop passed in the searchbar component in the App.js file. every time the form is submitted, this function will be called and it will call the onsearchsubmit function in the app file which will take the latest this.state.term and run the function
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <div className="ui category search">
        <form onSubmit={this.onFormSubmit}>
          <div className="ui icon input">
            <input
              className="prompt"
              type="text"
              placeholder="Movie search"
              value={this.state.term}
              onChange={this.onInputChange}
            ></input>
            <i className="search icon"></i>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
