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
      <div className={this.props.searchBar ? 'search-bar' : 'hidden'}>
          <section className="search">
            <div className="search-box">
              <input type="text" placeholder='Search and hit enter...'  />
              <button>
                <i className="fa fa-search hover"></i>
              </button>
              <button  onClick={() => this.setSearchBar()}>
                <i className="fa-solid fa-x hover"></i>
              </button> 
            </div>
          </section>
        </div>
    )
  }
}

export default Search;
