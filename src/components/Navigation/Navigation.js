import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navigation.css'

const navigation = (props) => (
    <nav className='Navigation'>
        <ul>
            <li>
                <NavLink to='/map'>Map</NavLink>
            </li>
            <li>
                <NavLink to='/feed'>Feed</NavLink>
            </li>
        </ul>
    </nav>
);

export default navigation;