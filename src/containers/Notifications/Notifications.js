import React, {Component} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Button from '@material-ui/core/Button';
import './Notifications.css';
import Notification from '../../components/Notification/Notification';
import adam from '../../assets/images/adamElara-mini.jpg';
import larry from '../../assets/images/larryCherry-mini.jpg';
import andrew from '../../assets/images/andrew-mini2.jpeg'
import mike from '../../assets/images/mike-mini2.jpeg'
class Notifications extends Component {
    state = {}

    render(){

        console.log(this.props)
        return (
            <React.Fragment>
                <NavBar location={this.props.location.pathname}/>
                <div className='Notifications'>
                    <Button className='FollowBtn'>Following</Button>
                    <Button className='FriendsBtn'>Friends</Button>
                    <Button className='MeBtn'>Me</Button>
                    <h3 style={{color: 'white'}}>Recent</h3>
                    <Notification 
                        src={mike} 
                        title='Mike followed Helen Sartory'
                        time='2hr'
                        artistId='1'/>
                    <Notification 
                        src={adam} 
                        title='ADAM ELARA: SECRET GROUP'
                        time='6hr'
                        artistId='10'/>
                    <Notification 
                        src={larry} 
                        title='Larrydonsaurus saw KE$SHA'
                        time='3d'
                        artistId='1'/>
                    <Notification 
                        src={andrew} 
                        title='AndrewV42069 followed Adam Elara'
                        time='2w'
                        artistId='1'/>
                </div>

            </React.Fragment>
        );
    }
}

export default Notifications;