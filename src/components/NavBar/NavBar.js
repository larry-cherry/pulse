import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Navigation from './Navigation/Navigation'
import Notification from '@material-ui/icons/Notifications'
import IconButton from '@material-ui/core/IconButton';

class NavBar extends Component {

    state = {

    }

    render(){

        return (
          <div className='NavBar'>
            <AppBar position="static">
                <Toolbar >
                    <IconButton>
                        <Notification />
                    </IconButton>
              <h2 style={{textAlign: 'center', margin: 'auto'}}>Pulse</h2>
              <Navigation/>
              </Toolbar>
            </AppBar>
          </div>
        );
    }
  }

export default NavBar;