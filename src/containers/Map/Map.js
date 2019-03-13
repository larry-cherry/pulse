import React, { Component } from 'react';
import './Map.css'
import NavBar from '../../components/NavBar/NavBar';

class Map extends Component {

    render(){

        return (
            <React.Fragment>
                <NavBar/>
                <div className='Map'>
                </div>  
            </React.Fragment>
                
        )
    }
}

export default Map;