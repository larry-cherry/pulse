import React from 'react';
import './Notification.css'
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom'

const notification = (props) => (
    
    <div className='Notification'>
    <Link to={`/artist/${props.artistId}`}>
    <Button>
        <div style={{backgroundImage: `url(${props.src})`}}></div>
        <p>{props.title}</p>
        <p style={{fontStyle: 'italic'}}>{props.time}</p>
    </Button>
    </Link>
    </div>
);

export default notification;