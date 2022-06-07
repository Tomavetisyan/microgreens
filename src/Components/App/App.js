import React from 'react';
import './App.css';
import Header from '../Header/Header';
import {
  HashRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../Body/Home/Home';
import Microgreens from '../Body/Microgreens/Microgreens'

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Header />
            <div>
              <Switch>     
                <Route exact path="/items">
                  <Microgreens />
                </Route>
                <Route exact path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
          </Router>
      </>

   
    );
  }
}

export default App;