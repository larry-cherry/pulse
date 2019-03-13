import React, {Component} from 'react';
import NavBarArtist from '../../components/NavBar/NavBarArtist/NavBarArtist';
import adamEvent from '../../assets/images/adamEvent.jpg';
import Button from '@material-ui/core/Button';
import './Event.css';

class Event extends Component {

    render(){

        return(
            <React.Fragment>
                <NavBarArtist/>
                <div style={{width: '100%',
                        height: 'calc(100vh - 350px)',
                        backgroundImage: `url(${adamEvent})`,
                        backgroundSize: 'cover'}}></div>
                <div className='EventInfo'
                    style={{height: '350px',
                            backgroundColor: 'white'}}>
                    <p style={{padding: '25px'}}>
                        I will be competing at Battle of the Bands for a chance to play at The So What Music festival. Justin Henderson will be joining me behind the kit and BEN the Robot will be spinning our tracks. Come help us make this happen!
                    </p>
                    <Button 
                        variant='default'
                        style={{border: '1px solid black'}}>
                            Going
                    </Button>
                    <p style={{padding: '25px'}}>78 People Going</p>
                </div>
            </React.Fragment>
        )
    }
}

export default Event;