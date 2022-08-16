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
import Footer from '../Footer/Footer'
import items from '../Body/Microgreens/Items';

class App extends React.Component {
  constructor() {
    super();

    this.state = JSON.parse(window.localStorage.getItem('state')) || {
      imageSrc: '',
      name: '',
      price: '',
      description: '',
      cartItem: 0,
      cartInfo: {}
    };

    this.itemInfo = this.itemInfo.bind(this);
    this.cartItem = this.cartItem.bind(this);
  }

  cartItem(cartItem, cartInfo){
    
    this.setState(prevState => {
      return {cartItem: prevState.cartItem + cartItem,}
    });
    const newCart = {...this.state.cartInfo, [cartInfo.name]: [cartInfo, ]}
    this.setState({
      cartInfo: newCart
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

  componentDidUpdate(prevProps, prevState) {
    if (prevState.cartInfo !== this.state.cartInfo) {
      console.log(this.state.cartInfo)
    }
  }

  render() {
    return (
      <>
        <Router>
          <Header cartItem={this.state.cartItem}/>
            <div>
              <Routes >
                <Route exact path="/" element={<Home />}></Route>     
                <Route exact path="/items" element={<Microgreens item={items} itemInfo={this.itemInfo} cartItem={this.cartItem}/>}></Route>
                <Route path="/items/:id" element={<ItemInfo item={items} itemInfo={this.itemInfo} imageSrc={this.state.imageSrc} name={this.state.name} 
                            price={this.state.price} description={this.state.description} cartItem={this.cartItem}/>} />
              </Routes>
            </div>
            
            <Footer />
          </Router>
      </>
    );
  }
}

export default App;