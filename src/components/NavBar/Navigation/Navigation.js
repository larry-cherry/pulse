import React, { Component } from 'react';
import './Navigation.css'
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MapIcon from '@material-ui/icons/Map';
import FeedIcon from '@material-ui/icons/RssFeed';


import NavigationIcon from './NavigationIcon/NavigationIcon';


class Navigation extends Component {

    state = {
        right: false
      };
    
      toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };

    render(){



    return (
        <div className='Navigation'>

        <MenuIcon onClick={this.toggleDrawer('right', true) }/>        
        
        <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
        <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('right', false)}
            onKeyDown={this.toggleDrawer('right', false)}>
            <List>
                <NavigationIcon text='Map' link='/map'>
                    <MapIcon />
                </NavigationIcon>
                <NavigationIcon text='Feed' link='/feed'>
                    <FeedIcon />
                </NavigationIcon>
            </List>
        <Divider />
        <List>       
            <ListItem button key='otherItems'>
              <ListItemIcon><InboxIcon /></ListItemIcon>
              <ListItemText primary='otherItems' />
            </ListItem>
        </List>
          </div>
        </Drawer>
      </div>
    );
  }
    
}

export default Navigation;