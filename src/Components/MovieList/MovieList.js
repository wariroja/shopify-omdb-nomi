/** @format */

import React from 'react';
import './MovieList.css';
import Movie from '../Movie/Movie';

class MovieList extends React.Component {
  render() {
    return (
      <div class='MovieList'>
        {this.props.movies.map((movie) => (
          <Movie
            movie={movie}
            key={movie.id}
            addMovie={this.props.addMovie}
            removeMovie={this.props.removeMovie}
            isRemoval={this.props.isRemoval}
          />
        ))}
      </div>
    );
  }
}

export default MovieList;
