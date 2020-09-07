/** @format */

import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component {
  render() {
    return (
      <div className='SearchBar'>
        <input placeholder='Enter A Movie Title' />
      </div>
    );
  }
}

export default SearchBar;
