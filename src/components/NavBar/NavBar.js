import React, {Component} from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Navigation from './Navigation/Navigation'
import Notification from '@material-ui/icons/Notifications'
import IconButton from '@material-ui/core/IconButton';
import {Link} from 'react-router-dom';
import NavBarDefault from './NavBarDefault/NavBarDefault';
import NavBarNotifications from './NavBarNotifications/NavBarNotifications';
class NavBar extends Component {

    render(){

        let navBar = <NavBarDefault/>;

        if(this.props.location == '/notifications'){
          navBar = <NavBarNotifications/>;
        }

        console.log(this.props);
        return (
          <React.Fragment>
            {navBar}
          </React.Fragment>
        );
    }
  }

export default NavBar;