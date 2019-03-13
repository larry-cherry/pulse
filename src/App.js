import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
// import Navigation from './components/Navigation/Navigation';
import Map from './containers/Map/Map';
import NavBar from './components/NavBar/NavBar';
import Feed from './containers/Feed/Feed';
class App extends Component {
  render() {
    return (
      <div className="App">
        
        <NavBar/>
        <header className="App-header">
        
        </header>
        <Switch>
          <Route path='/' exact component={Map}/>
          <Route path='/map' exact component={Map}/>
          <Route path='/feed' component={Feed}/>
        </Switch>
      </div>
    );
  }
}

export default App;
