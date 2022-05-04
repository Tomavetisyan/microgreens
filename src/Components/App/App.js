import React from 'react';
import './App.css';
import Header from '../Header/Header';
import {BrowserRouter as Router,Switch} from "react-router-dom";

class App extends React.Component {

  render() {
    return (
      <>
        <Router>
          <Header />
          <Switch>
            {/* <Route path="/" exact>
              <About />
            </Route> */}
          </Switch>
        </Router>
      </>

   
    );
  }
}

export default App;