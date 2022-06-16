import React from 'react';
import './App.css';
import Header from '../Header/Header';
import {
  HashRouter as Router,
  Routes ,
  Route,
  Link
} from "react-router-dom";
import Home from '../Body/Home/Home';
import Microgreens from '../Body/Microgreens/Microgreens';
import ItemInfo from '../Body/Microgreens/ItemInfo/ItemInfo';

class App extends React.Component {
  constructor() {
    super();

    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      imageSrc: '',
      name: '',
      price: '',
      description: '',
      cartItem: 0
    };

    this.itemInfo = this.itemInfo.bind(this);
    this.cartItem = this.cartItem.bind(this);
  }

  cartItem(cartItem){
    this.setState(prevState => {
      return {cartItem: prevState.cartItem + cartItem}
    });
   
  }

  itemInfo(imageSrc, name, price, description){
    this.setState({ 
      imageSrc: imageSrc,
      name: name,
      price: price,
      description: description
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header cartItem={this.state.cartItem}/>
            <div>
              <Routes >
                <Route exact path="/" element={<Home />}></Route>     
                <Route exact path="/items" element={<Microgreens itemInfo={this.itemInfo} cartItem={this.cartItem}/>}></Route>
                <Route path="/items/ItemInfo" element={<ItemInfo imageSrc={this.state.imageSrc} name={this.state.name} 
                            price={this.state.price} description={this.state.description} cartItem={this.cartItem}/>} />
              </Routes>
            </div>
          </Router>
      </>
    );
  }
}

export default App;