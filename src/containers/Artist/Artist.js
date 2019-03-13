import React, {Component} from 'react'
import adamImg from '../../assets/images/adamElara-mini.jpg';
import './Artist.css';
import NavBar from '../../components/NavBar/NavBar';
import Button from '@material-ui/core/Button';

class Artist extends Component {

    state = {
        artist: [
            {
                id: 1,
                name: 'Adam Elara',
                image: adamImg
            }

        ]
    }

    render() {
        console.log(this.props.match.path);
        return (
            <React.Fragment>
                <NavBar location={this.props.match.path}/>
                <div className='Artist'>
                    <div 
                        className='artistImage'
                        style={{backgroundImage: `url(${adamImg})`}}>
                        <h1 style={{color: 'white'}}>{this.state.artist[0].name}</h1>
                        <Button variant="contained">
                            Follow
                        </Button>
                    </div>
                    <div className='info'>
                        <p>8.6b followers</p>
                        <p>Checked into Houston 1d</p>
                        <p>Followed by Chase13 +26 others</p>
                        <p>Genre-fluid tunes, super solid dude. Vegan/Straight Edge.</p>
                        <h2>Upcoming Show:</h2>
                        <Button variant='contained'>
                            <p>3/24 5:00pm</p>
                            <p>Secret Group: Battle of the Bands!</p>
                        </Button>
                    </div>
                </div>
            </React.Fragment>
        );
    } 
}

export default Artist;