import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';

class Notifications extends Component {
    state = {}

    render(){
        console.log(this.props.location.pathname)
        return (
            <React.Fragment>
                <NavBar/>
                <h1>Notifications</h1>
            </React.Fragment>
        );
    }
}

export default Notifications;