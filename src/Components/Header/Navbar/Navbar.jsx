import React from 'react'
import {Logo} from '../../../Assets/index';
import './Navbar.css';
import Search from '../Search/Search';
import { Link } from "react-router-dom";


class Navbar extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      mobileMenu: false,
      searchBar: false,
      sticky: false
    };
    this.setMobileMenu = this.setMobileMenu.bind(this);
    this.setSearchBar = this.setSearchBar.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', () => {
        this.setState({
          mobileMenu: false
        });
    });
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 45){
        this.setState({
          sticky: true
        });
      }else{
        this.setState({
          sticky: false
        });
      }
    });
  }

  setMobileMenu(mobileMenu){
    this.setState({
      mobileMenu: mobileMenu,
    }); 
  }
  setSearchBar(){
    this.setState({
      searchBar: !this.state.searchBar,
    }); 
  }
  render(){
    return (
      <div>
        <header className='header'>
          <div className="mobile-header">
            <div className="container-fluid">
              <div className="header-row">
                <div className="mobile-parent-menu">
                  <div className="menu-toggle">
                    <div className="mobil-navbar">
                      <ul className={this.state.mobileMenu ? "nav-links-MobileMenu" : "hidden"} >
                        <li>
                          <button className="navbar-toggle" onClick={() => this.setMobileMenu(!this.state.mobileMenu)}>
                            <i className="fas fa-bars navbar-toggle hover"></i>
                          </button>  
                        </li>
                        <li>
                          <Link to="/" className="hover">Home</Link>
                        </li>
                        <li> 
                          <Link to="/items" className="hover">Items</Link>
                        </li>
                        <li>
                          <Link to="/about" className="hover">About</Link> 
                        </li>
                        <li> 
                          <Link to="/contact" className="hover">Contact</Link>
                        </li>
                      </ul>
                      
                    </div>   
                    
                    <button className="navbar-toggle" onClick={() => this.setMobileMenu(!this.state.mobileMenu)}>
                        <i className="fas fa-bars navbar-toggle hover"></i>
                    </button>                  
                  </div>
                </div>
                <div className="flex">
                  <button className='' onClick={() => this.setSearchBar()}>
                    {this.state.searchBar ?              
                      "":
                      <i className="fa fa-search icon-circle hover"></i> }
                  </button>     
                  <i className="fa fa-user icon-circle"></i>
                  <div className="cart">
                    <a href="/cart" className="">
                      <i className="fa fa-shopping-bag icon-circle"></i>
                      <span>{this.props.cartItem}</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
            
            <Search searchBar={this.state.searchBar} setSearchBar={() => this.setSearchBar()}/>    
            
            <div className="container-fluid top-line">
              <div className="logo-container">
                <a className="logo logo-alignment" href="/">
                  <img src={Logo} alt=""  />
                </a>
              </div>
            </div>
          </div>

          <div className="desktop-header">
            <div className="head-container">
              <div className="header-holder">

                <a className="logo logo-alignment" href="/"><img src={Logo} alt=""  /></a>
      
                <div className="navlink">
                  <ul className="nav-list capitalize" >
                    <li>
                          <Link to="/" className="hover">Home</Link>
                        </li>
                        <li> 
                          <Link to="/items" className="hover">Items</Link>
                        </li>
                        <li>
                          <Link to="/about" className="hover">About</Link> 
                        </li>
                        <li> 
                          <Link to="/contact" className="hover">Contact</Link>
                      </li>
                  </ul>
                </div>
      
                <div className="flex">
                  <button className='' onClick={() => this.setSearchBar()}>
                    {this.state.searchBar ?              
                      "":
                      <i className="fa fa-search icon-circle hover"></i> }
                  </button>     
                  <i className="fa fa-user icon-circle"></i>
                  <div className="cart">
                    <a href="/cart" className="">
                      <i className="fa fa-shopping-bag icon-circle"></i>
                      <span>{this.props.cartItem}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <Search searchBar={this.state.searchBar} setSearchBar={() => this.setSearchBar()}/>    
            
          </div>

          <div className={this.state.sticky ? "header sticky": 'hidden'}>
            <div className="head-container">
              <div className="header-holder">

                <a className="logo logo-alignment" href="/"><img src={Logo} alt=""  /></a>
      
                <div className="navlink">
                  <ul className="nav-list capitalize" >
                    <li>
                      <Link to="/" className="hover">Home</Link>
                    </li>
                    <li> 
                      <Link to="/Microgreens" className="hover">Microgreens</Link>
                    </li>
                    <li>
                      <Link to="/About" className="hover">About</Link> 
                    </li>
                    <li> 
                      <Link to="/Contact" className="hover">Contact</Link>
                    </li>
                  </ul>
                </div>
      
                <div className="flex">
                  <button className='' onClick={() => this.setSearchBar()}>
                    {this.state.searchBar ?              
                      "":
                      <i className="fa fa-search icon-circle hover"></i> }
                  </button>     
                  <i className="fa fa-user icon-circle"></i>
                  <div className="cart">
                    <a href="/cart" className="">
                      <i className="fa fa-shopping-bag icon-circle"></i>
                      <span>{this.props.cartItem}</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={this.state.mobileMenu ? "overlay" : "hidden"} onClick={() => this.setMobileMenu()}></div>
        </header>
      </div>
    )
  }
}

export default Navbar;