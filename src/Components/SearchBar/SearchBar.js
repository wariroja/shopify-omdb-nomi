/** @format */

import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component {
  render() {
    return (
      <div class='SearchBar'>
        <input placeholder='Enter A Movie Title' />
      </div>
    );
  }
}

export default SearchBar;