/** @format */

import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import NominateList from '../NominateList/NominateList';
import Omdb from '../util/Omdb';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchResults: [],
      nominateList: [],
    };
    this.addMovie = this.addMovie.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
    this.search = this.search.bind(this);
    this.handleCount = this.handleCount.bind(this);
  }

  addMovie(movie) {
    if (
      this.state.nominateList.find((savedMovie) => savedMovie.id === movie.id)
    ) {
      return;
    }
    let updatedList = this.state.nominateList;
    updatedList.push(movie);
    this.handleCount();
    return this.setState({ nominateList: updatedList });
  }

  removeMovie(movie) {
    let nominateList = this.state.nominateList;
    let newNominateList = nominateList.filter(
      (nominated) => nominated.id !== movie.id
    );
    this.setState({ nominateList: newNominateList });
  }

  handleCount() {
    if (this.state.nominateList.length === 5) {
      alert(
        'You have nominated 5 movies, we will only use first 5 movies added'
      );
    }
  }

  async search(term) {
    await Omdb.search(term).then((result) =>
      this.setState({ searchResults: result })
    );
  }

  render() {
    return (
      <div>
        <h1>
          SHO<span className='highlight'>PP</span>IES
        </h1>
        <div className='App'>
          <SearchBar search={this.search} />
          <div className='App-nominatelist'>
            <SearchResults
              searchResults={this.state.searchResults}
              addMovie={this.addMovie}
            />
            <NominateList
              nominateList={this.state.nominateList}
              removeMovie={this.removeMovie}
              handleCount={this.handleCount}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
