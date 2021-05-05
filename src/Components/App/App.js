import React from 'react'

import Home from '../../Pages/home'
import AboutPage from '../../Pages/about'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



class App extends React.Component {

  render() {
    return (
      <Router>
      <Switch>
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={Home} />
      </Switch>
      </Router>
    );
  }
}

export default App;
