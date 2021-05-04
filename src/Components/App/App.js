import React from 'react'
import Data from '../../cases'

import Home from '../../Pages/home'
import About from '../../Pages/about'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends React.Component {


  setSelected = (client) => {
    this.setState({ active: client });
    console.log(this.state.active)
  }

  render() {
    return (
      <Router>
      <Switch>
        <Route path="/about" component={About} />
        <Route path="/" component={Home} />
      </Switch>
      </Router>
    );
  }
}

export default App;
