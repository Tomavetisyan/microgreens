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
      desktopSticky: false,
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
          desktopSticky: true
        });
      }else{
        this.setState({
          desktopSticky: false
        });
      }
    });
    window.addEventListener('scroll', () => {
      if(window.pageYOffset > 145){
        this.setState({
          mobileSticky: true
        });
      }else{
        this.setState({
          mobileSticky: false
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
                    <div className="mobile-navbar">
                      <div className={this.state.mobileMenu ? "nav-links-MobileMenu" : "hidden"}>
                        <div className="close">
                          <button className="navbar-toggle" onClick={() => this.setMobileMenu(!this.state.mobileMenu)}>
                              <i className="fa-solid fa-x hover"></i>
                          </button> 
                        </div>
                        
                        <ul className= "top" >
                          <li>
                            <Link to="/" className="width hover" onClick={() => this.setMobileMenu(!this.state.mobileMenu)}>Home</Link>
                          </li>
                          <li> 
                            <Link to="/items" className="width hover" onClick={() => this.setMobileMenu(!this.state.mobileMenu)}>Items</Link>
                          </li>
                          <li>
                            <Link to="/about" className="width hover" onClick={() => this.setMobileMenu(!this.state.mobileMenu)}>About</Link> 
                          </li>
                          <li> 
                            <Link to="/contact" className="width hover" onClick={() => this.setMobileMenu(!this.state.mobileMenu)}>Contact</Link>
                          </li>
                        </ul>
                        <ul className="bottom">
                          <li className="">
                            <Link to="/account" className="width hover" onClick={() => this.setMobileMenu(!this.state.mobileMenu)}>Account</Link>
                          </li>
                          <li className="">
                            <Link to="/settings" className="width hover" onClick={() => this.setMobileMenu(!this.state.mobileMenu)}>Settings</Link>
                          </li>
                          <li className="">
                            <a to="/" className="width hover" onClick={() => this.setMobileMenu(!this.state.mobileMenu)}>Sign out</a>
                          </li>
                        </ul>
                      </div>
                      
                    </div>   
                    
                    <button className="navbar-toggle" onClick={() => this.setMobileMenu(!this.state.mobileMenu)}>
                        <i className="fas fa-bars hover"></i>
                    </button>                  
                  </div>
                </div>
                <div className="search">
                  <input type="search" placeholder='Search' className="searchbar" />
                  <i className="fa fa-search hover"></i>
                </div>
                <div className="flex">
                  <div className="cart">
                    <a href="/cart" className="">
                      <i className="fa fa-shopping-bag icon-circle"></i>
                      <span>{this.props.cartItem}</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
            
            {/* <Search searchBar={this.state.searchBar} setSearchBar={() => this.setSearchBar()}/>     */}
            
            <div className="top-line">
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

              <Link to="/" className="hover"><img src={Logo} alt=""  /></Link>
      
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
            
            {/* <Search searchBar={this.state.searchBar} setSearchBar={() => this.setSearchBar()}/>     */}
            
          </div>

          <div className={this.state.desktopSticky ? "header sticky": 'hidden'}>
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
            </div>
          </div>

          <div className={this.state.mobileSticky ? "mobile-header sticky": 'hidden'}>
            <div className="container-fluid">
              <div className="header-row">
                <div className="mobile-parent-menu">
                  <div className="menu-toggle">
                    <div className="mobile-navbar">
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
                <Link to="/" className="hover middle"><img src={Logo} alt=""  /></Link>
                <div className="flex">
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

          <div className={this.state.mobileMenu ? "overlay" : this.state.searchBar ? "overlay":"hidden"} onClick={() => this.setMobileMenu()}></div>
          
        </header>
      </div>
    )
  }
}

export default Navbar;