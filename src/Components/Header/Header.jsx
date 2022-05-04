import React from 'react'
import Head from './Head';
import Navbar from './Navbar';
import Search from './Search';
import './Header.css';

class Header extends React.Component {
  render(){
    return (
      <div>
        <Head />
        {/* <Search /> */}
        <Navbar cartItem ={0}/>
      </div>
    )
  }
}

export default Header;