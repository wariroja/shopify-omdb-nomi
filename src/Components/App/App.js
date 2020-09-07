/** @format */

import React from 'react';
import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import NominateList from '../NominateList/NominateList';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>
          N<span className='highlight'>OM</span>I
        </h1>
        <div className='App'>
          <SearchBar />
          <div className='App-nominatelist'>
            <SearchResults />
            {/* <NominateList />  */}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
