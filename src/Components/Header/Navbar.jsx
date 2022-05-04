import React, { useState } from 'react'
import logo from '../../Assets/logo.png';

class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mobileMenu: false,
    };
    this.setMobileMenu = this.setMobileMenu.bind(this);
  }
  setMobileMenu(mobileMenu){
    this.setState({
      mobileMenu: mobileMenu,
    });
    
   
    
  }
  render(){
    return (
      <>
        <header className= 'header'>
          <div className="mobile-header">
            <div className="container-fluid">
              <div className="header-row">
                <div className="mobile-parent-menu">
                  <div className="menu-toggle">
                      <ul className={this.state.mobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} 
                    onClick={() => this.setMobileMenu(false)}>
                    
                    <li>
                      <a href="/" className="">Home</a> 
                    </li>
                    <li> 
                      <a href="/Microgreens" className="">Microgreens<i className='fa fa-chevron-down'></i></a>
                    </li>
                    <li> 
                      <a href="/About" className="">About</a>
                    </li>
                    <li> 
                      <a href="/Contact" className="">Contact</a>
                    </li>
                  </ul>
                  {/* <button className="toggle" onClick={() => this.setMobileMenu(!this.state.mobileMenu)}>
                    {this.state.mobileMenu ? <i className="fas fa-bars toggle"></i>:
                      <i className='fas fa-bars toggle'></i>}
                  </button> */}
                
                    <button className="toggle" onClick={() => this.setMobileMenu(!this.state.mobileMenu)}>
                      hello
                      {this.state.mobileMenu ? <i className="fas fa-bars toggle"></i>:
                        <i className='fas fa-bars toggle'></i>}
                    </button>
                  </div>
                </div>
                <div className='search'>
                  <i className="fa fa-search icon-circle"></i>
                </div>
                <div className='user'>
                  <i className="fa fa-user icon-circle"></i>
                </div>
                <div className="cart">
                  <a href="/cart" className="">
                    <i className="fa fa-shopping-bag icon-circle"></i>
                    <span>{this.props.cartItem}</span>
                  </a>
                </div>
              </div>
            </div>
            <div class="container-fluid top-line">
              <div class="row center">
                <div class="logo-container">
                  <a class="logo logo-alignment" href="/"><img src={logo} alt=""  /></a>
                </div>
              </div>
            </div>
            <div className="logo">
              
            </div>
          </div>
          <div className="desktop-header container width d_flex">
            {/* <div className='categories d_flex'>
              <span className='fa-solid fa-border-all'></span>
              <h4>
              categories <i className='fa fa-chevron-down'></i>
              </h4>
            </div> */}
  
            <div className="logo">
              <img src={logo} alt=""  />
            </div>
  
            <div className="navlink">
              <ul className={this.state.mobileMenu ? "nav-links-MobileMenu" : "link f_flex capitalize"} 
                onClick={() => this.setMobileMenu(false)}>
                
                <li>
                  <a href="/" className="">Home</a> 
                </li>
                <li> 
                  <a href="/Microgreens" className="">Microgreens<i className='fa fa-chevron-down'></i></a>
                </li>
                <li> 
                  <a href="/About" className="">About</a>
                </li>
                <li> 
                  <a href="/Contact" className="">Contact</a>
                </li>
              </ul>
              {/* <button className="toggle" onClick={() => this.setMobileMenu(!this.state.mobileMenu)}>
                {this.state.mobileMenu ? <i className="fas fa-bars toggle"></i>:
                  <i className='fas fa-bars toggle'></i>}
              </button> */}
            </div>
  
            <div className="icon f_flex">
              <i className="fa fa-search icon-circle"></i>
              <i className="fa fa-user icon-circle"></i>
              <div className="cart">
                <a href="/cart" className="">
                  <i className="fa fa-shopping-bag icon-circle"></i>
                  <span>{this.props.cartItem}</span>
                </a>
              </div>
            </div>
  
          </div>
        </header>
      </>
    )
  }
}

export default Navbar;