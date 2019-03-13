import React from 'react';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import {NavLink} from 'react-router-dom'


const navigationIcon = (props) =>(
    <NavLink to={props.link}>
        <ListItem button key={props.text}>
            <ListItemIcon>
                {props.children}
            </ListItemIcon>
        <ListItemText primary={props.text} />
        </ListItem>
    </NavLink>
);

export default navigationIcon;