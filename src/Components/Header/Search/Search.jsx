import React from 'react';
import './Search.css';

class Search extends React.Component {
  constructor(props){
    super(props);
    this.setSearchBar = this.setSearchBar.bind(this);
  }
  setSearchBar(){
    this.props.setSearchBar();
  }
  render(){
    return (
      <div className='search-bar'>
        <div className='search-bar-container'>
          <section className="search">
            <div className="search-box">
              <input type="text" placeholder='Search and hit enter...'  />
              <button>
                <i className="fa fa-search hover"></i>
              </button>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

export default Search;
