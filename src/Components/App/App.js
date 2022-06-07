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
          <Microgreens />
            {/* <div>
              <Switch>
                
                <Route exact path="/microgreens/items">
                  <Microgreens />
                </Route>
                <Route exact path="/microgreens">
                  <Home />
                </Route>
              </Switch>
            </div> */}
          </Router>
      </>

   
    );
  }
}

export default App;