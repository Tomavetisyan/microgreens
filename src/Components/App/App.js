import React from 'react';
import './App.css';
import Header from '../Header/Header';
import Body from '../Home/Body';
import {BrowserRouter as Router, Link} from "react-router-dom";


class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Header />
          
          <Body />
        </Router >
      </>

   
    );
  }
}

export default App;