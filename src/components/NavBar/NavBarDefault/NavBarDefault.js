import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Navigation from '../Navigation/Navigation'
import Notification from '@material-ui/icons/Notifications'
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';

const navBarDefault = (props) => (
    <div className='NavBar'>
    <AppBar position="static">
        <Toolbar >
            <Link to='/notifications'>
            <IconButton>
                <Notification />
            </IconButton>
            </Link>
      <h2 style={{textAlign: 'center', margin: 'auto'}}>Pulse</h2>
      <Navigation/>
      </Toolbar>
    </AppBar>
  </div>
);

export default navBarDefault;