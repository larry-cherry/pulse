import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import {Link} from 'react-router-dom';
import {MoreVert} from '@material-ui/icons';
import {KeyboardBackspace} from '@material-ui/icons'
import Button from '@material-ui/core/Button'
import './NavBarNotifications.css';

const navBarNotifications = (props) => (
    <div className='NavBarNotifications'>
    <AppBar position="static">
        <Toolbar >
            <Button className='NavBack'>
            <Link to='/'>
                <KeyboardBackspace/>
            </Link>
            </Button>
            
            <h2>NOTIFICATIONS</h2>

            <MoreVert/>
        </Toolbar>
    </AppBar>
    </div>
);

export default navBarNotifications;