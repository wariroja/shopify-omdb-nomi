/** @format */

import React from 'react';
import './SearchResults.css';
import MovieList from '../MovieList/MovieList';
class SearchResults extends React.Component {
  render() {
    return (
      <div className='SearchResults'>
        <h2>Results for 'searchterm' </h2>
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
