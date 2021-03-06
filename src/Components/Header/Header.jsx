import React from 'react'
import Head from './Head/Head';
import Navbar from './Navbar/Navbar';
import './Header.css';

class Header extends React.Component {
  render(){
    return (
      <div>
        <Head />
        <Navbar cartItem ={this.props.cartItem}/>
      </div>
    )
  }
}

export default Header;