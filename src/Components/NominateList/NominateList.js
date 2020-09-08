/** @format */

import React from 'react';
import './NominateList.css';
import MovieList from '../MovieList/MovieList';

class NominateList extends React.Component {
  render() {
    return (
      <div className='NominateList'>
        <h2>Nominate List</h2>
        <MovieList
          movies={this.props.nominateList}
          isRemoval={true}
          removeMovie={this.props.removeMovie}
        />
      </div>
    );
  }
}

export default NominateList;
