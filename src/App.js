import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom';
// import Navigation from './components/Navigation/Navigation';
import Map from './containers/Map/Map';
import NavBar from './components/NavBar/NavBar';
import Feed from './containers/Feed/Feed';
import Notifications from './containers/Notifications/Notifications';
import Artist from './containers/Artist/Artist'
import Event from './containers/Event/Event';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <header className="App-header">
        
        </header>
        <Switch>
          <Route path='/' exact component={Map}/>
          <Route path='/map' exact component={Map}/>
          <Route path='/feed' component={Feed}/>
          <Route path='/notifications' component={Notifications}/>
          <Route path='/artist/:id' component={Artist}/>
          <Route path='/event/:id' component={Event}/>
        </Switch>
      </div>
    );
  }
}

export default App;
