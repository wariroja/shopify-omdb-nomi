/** @format */

import React from 'react';
import './Movie.css';

class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.addMovie = this.addMovie.bind(this);
    this.removeMovie = this.removeMovie.bind(this);
    this.onClicks = this.onClicks.bind(this);
  }
  renderAction() {
    //waiting for props to be pass through from state is APP
    if (this.props.isRemoval) {
      return (
        <button className='Movie-action' onClick={this.removeMovie}>
          Remove
        </button>
      );
    } else {
      return (
        <button
          className='Movie-action'
          onClick={this.addMovie}
          ref={(btnReview) => {
            this.btnReview = btnReview;
          }}>
          Nominate
        </button>
      );
    }
  }
  onClicks = (e) => {
    this.btnReview.setAttribute('disabled', 'disabled');
  };
  addMovie(movie) {
    this.props.addMovie(this.props.movie);
    this.onClicks();
  }

  removeMovie(movie) {
    this.props.removeMovie(this.props.movie);
  }
  render() {
    return (
      <div className='Movie'>
        <div className='Movie-information'>
          <p>
            {this.props.movie.title} | {this.props.movie.year}
          </p>
        </div>
        {this.renderAction()}
      </div>
    );
  }
}

export default Movie;
