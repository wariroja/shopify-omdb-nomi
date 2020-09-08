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
      nominateList: [
        { title: 'title1', year: 'year1', id: 4 },
        { title: 'title2', year: 'year2', id: 5 },
        { title: 'title3', year: 'year3', id: 6 },
      ],
    };
    this.addMovie = this.addMovie.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
    this.search = this.search.bind(this);
  }

  addMovie(movie) {
    if (
      this.state.nominateList.find((savedMovie) => savedMovie.id === movie.id)
    ) {
      return;
    }
    let updatedList = this.state.nominateList;
    updatedList.push(movie);
    return this.setState({ nominateList: updatedList });
  }

  removeMovie(movie) {
    let nominateList = this.state.nominateList;
    let newNominateList = nominateList.filter(
      (nominated) => nominated.id !== movie.id
    );
    this.setState({ nominateList: newNominateList });
  }

  search(term) {
    Omdb.search(term).then((searchResults) => console.log(searchResults));
  }

  render() {
    return (
      <div>
        <h1>
          N<span className='highlight'>OM</span>I
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
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
