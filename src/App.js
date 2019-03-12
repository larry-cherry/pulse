import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Map from './containers/Map/Map';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <Navigation/>
        
        </header>
        <Switch>
          <Route path='/' component={Map}/>
          <Route path='/map' exact component={Map}/>

        </Switch>
      </div>
    );
  }
}

export default App;
