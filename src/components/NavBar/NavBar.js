import React, {Component} from 'react';
import NavBarDefault from './NavBarDefault/NavBarDefault';
import NavBarNotifications from './NavBarNotifications/NavBarNotifications';
import NavBarArtist from './NavBarArtist/NavBarArtist';
class NavBar extends Component {

    render(){

        let navBar = <NavBarDefault/>;

        if(this.props.location == '/notifications'){
          navBar = <NavBarNotifications/>;
        } else if(this.props.location == '/artist/:id'){
          navBar = <NavBarArtist/>;
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