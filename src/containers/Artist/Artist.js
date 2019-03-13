import React, {Component} from 'react'

class Artist extends Component {

    state = {
        artist: {
            id: 1,
            name: 'Adam'
        }
    }

    render() {
        console.log(this.props);
        return (
            <h1>
                    some text {this.props.match.params.id}

            </h1>
        );
    } 
}

export default Artist;