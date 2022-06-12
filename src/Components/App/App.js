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

    };

    this.itemInfo = this.itemInfo.bind(this);
  }

  itemInfo(imageSrc, name, price){
    this.setState({ 
      imageSrc: imageSrc,
      name: name,
      price: price,
    })

    console.log(this.state.name, this.state.imageSrc, this.state.price);
  }

  render() {
    return (
      <>
        <Router>
          <Header />
            <div>
              <Routes >
                <Route exact path="/" element={<Home />}></Route>     
                <Route exact path="/items" element={<Microgreens itemInfo={this.itemInfo}/>}></Route>
                <Route path="/items/ItemInfo" element={<ItemInfo imageSrc={this.state.imageSrc} name={this.state.name} price={this.state.price} />} />
              </Routes>
            </div>
          </Router>
      </>
    );
  }
}

export default App;