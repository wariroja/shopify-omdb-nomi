/** @format */

import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  search(term) {
    return fetch(`http://www.omdbapi.com/?apikey=5f9e3ef&t=${this.state.term}`)
      .then((response) => response.json())
      .then((jsonResponse) => {
        console.log(jsonResponse);
      });
  }

  handleChange(event) {
    this.setState({ term: event.target.value });
    console.log(this.state.term);
  }
  render() {
    return (
      <div className='SearchBar'>
        <input placeholder='Enter A Movie Title' onChange={this.handleChange} />
      </div>
    );
  }
}

export default SearchBar;
