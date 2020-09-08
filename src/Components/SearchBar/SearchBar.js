/** @format */

import React from 'react';
import './SearchBar.css';
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    // this.search = this.search.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  // search(term) {
  //   this.props.search(this.state.term);
  // }

  handleChange = async function (e) {
    await this.setState({ term: e.target.value });
    this.props.search(this.state.term);
  };
  render() {
    return (
      <div className='SearchBar'>
        <input
          placeholder='Enter A Movie Title'
          onChange={(e) => this.handleChange(e)}
        />
      </div>
    );
  }
}

export default SearchBar;
