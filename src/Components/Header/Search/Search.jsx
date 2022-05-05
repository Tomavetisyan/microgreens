import React from 'react';
import './Search.css';

class Search extends React.Component {
  // window.addEventListener('scroll', function(){
  //   const search = this.document.querySelector('.search')
  //   search.classList.toggle('active', window.scrollY > 100)
  // })
  render(){
    return (
      <>
          <section className="search">
            <div className="search-box">
              <i className="fa fa-search"></i>
              <input type="text" placeholder='Search and hit enter...'  />
            </div>
          </section>
      </>
    )
  }
}

export default Search;
