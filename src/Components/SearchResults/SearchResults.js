/** @format */

import React from 'react';
import './SearchResults.css';
import MovieList from '../MovieList/MovieList';
class SearchResults extends React.Component {
  render() {
    return (
      <div className='SearchResults'>
        <h2>Search Results</h2>
        <MovieList
          movies={this.props.searchResults}
          addMovie={this.props.addMovie}
          isRemoval={false}
        />
      </div>
    );
  }
}

export default SearchResults;
