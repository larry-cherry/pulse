import React, { Component } from 'react';

import './Map.css';
import { ReactBingmaps } from 'react-bingmaps';
import NavBar from '../../components/NavBar/NavBar';

import axios from 'axios';
import { XMLParser } from 'react-xml-parser';
import artistImage from '../../assets/artistImage/1.PNG'

class Map extends Component {

    state = {
        location: [30.2684075,-97.7388652]
    }

    updateMapCity(location) {
        var latitude = 30.2690, longitude = 97.7403 // default austin omni hotel

        if (location = "CurentLocation"){
            if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(showPosition); }
            
            function showPosition(position) {
                latitude = "Latitude: " + position.coords.latitude;
                longitude = position.coords.longitude;
            }
        }

        axios.get(`http://api.7digital.com/1.2/track/search?shopId=2020&oauth_consumer_key=7d4vr6cgb392&q=john&usageTypes=adsupportedstreaming`)
            .then(res => {
            //console.log(res);
            console.log(res.data);

            var XMLParser = require('react-xml-parser');

            var jsonObject = new XMLParser().parseFromString(res.data);    // Assume xmlText contains the example XML
            console.log(jsonObject.children[0].children[3].children[2].children[0].value); // title
            console.log(jsonObject.children[0].children[3].children[2].children[1].value); // version
            console.log(jsonObject.children[0].children[3].children[2].children[2].children[3].value); // image
            console.log(jsonObject.children[0].children[3].children[1].value); // score
        })

        switch(location)
        {
            case "CurrentLocation": this.setState({location: [latitude, longitude]}); break;
            case "Austin": this.setState({location: [30.267170, -97.736500]}); break;
            case "Houston": this.setState({location: [29.7604, 95.3698]}); break;
        }
    }

    render(){
        //this.updateMapCity("Houston");

        function artistGeneric(id, name, date, doorsOpen, venue, streetAddress, genre, location) {
            return{
                "id" : id, "name": name, "date": date, "doorsOpen": doorsOpen, "venue": venue, "streetAddress": streetAddress, "genre": genre, "location": location
            }
        }

        var artistData = new Array();

        // Austin artists
        artistData.push(artistGeneric(1, "AAerial", "3/16/2019", "7:30pm", "Dirty Dog Bar", "505 E 6th St., Austin, TX, 78701", "Progressive Ro", [30.26646, -97.73802] ));
        artistData.push(artistGeneric(2, "MAAD", "3/14/2019", "1:10am", "Palm Door on 6th", "508 E 6th St, Austin, TX 78701", "R&B, Soul", [30.26699, -97.73775] ));
        artistData.push(artistGeneric(3, "Aaron Cohen", "3/16/2019", "1:35am", "Mohawk Indoor", "912 Red River St, Austin, TX 78701E4", "Rap", [30.27005, -97.73611] ));
        artistData.push(artistGeneric(4, "EggPlantEgg", "3/13/2019", "1:00am", "Elysium", "705 Red River St, Austin, TX 78701", "Alt. Rock", [30.26767, -97.73658] ));
        artistData.push(artistGeneric(5, "Jake Lloyd", "3/16/2019", "10:55pm", "Barracuda", "611 E 7th St, Austin, TX 78701", "R&B", [30.26721, -97.73649] ));
        artistData.push(artistGeneric(6, "Khalid", "3/14/2019", "9:30pm", "UBER EATS House", "720 Brazos St, Austin, TX 78701", "Pop, R&B", [30.26924, -97.74116] ));
        artistData.push(artistGeneric(7, "PJAMA", "3/14/2019", "12:00am", "Russian House", "307 E 5th St, Austin, TX 78701", "Latin Rock", [30.26604, -97.74024] ));
        artistData.push(artistGeneric(8, ":PAPERCUTZ", "3/13/2019", "8:00pm", "CU29", "720 Brazos St, Austin, TX 78701", "Electronic", [30.26924, -97.74116] ));
        artistData.push(artistGeneric(9, "We And The Machin", "3/13/2019", "8:10", "720 Club Patio", "720 Red River St, Austin, TX 78701", "Electronic", [30.2683, -97.73676] ));

        // Houston artists
        artistData.push(artistGeneric(10, "Adam Elara", "3/24/2019", "5:00pm", "Secret Group", "2101 Polk St, Houston, TX 77003", "Fluid", [29.74898, -95.35684] ));
        // artistData.push(artistGeneric(11, "AA", "AA", "AA", "AA", "AA", "AA", [AA] ));
        // artistData.push(artistGeneric(12, "AA", "AA", "AA", "AA", "AA", "AA", [AA] ));
        // artistData.push(artistGeneric(13, "AA", "AA", "AA", "AA", "AA", "AA", [AA] ));
        // artistData.push(artistGeneric(14, "AA", "AA", "AA", "AA", "AA", "AA", [AA] ));


        // artistData.push(artistGeneric = {"id" : 3, "name": "", "date": "", "doors open": "", "venue": "", "street address": "", "location": , "genre": ""});
        // artistData.push(artistGeneric = {"id" : 4, "name": "EggPlantEgg", "date": "3/13/2019", "doors open": "1:00-1:50am", "venue": "Elysium", "street address": "705 Red River St, Austin, TX 78701", "location": [30.26767, -97.73658], "genre": "Alt. Rock"});

        var artistImage1 = artistImage;

        function pushPinGeneric(Location, Name, Date, Venue, Id, DoorsOpen, Address) {
            return{
                "location": Location
                , "addHandler": {"type" : "click"}
                , "addHandler":"mouseover"
                , "infoboxOption": { title: Name, description: `<img src=${artistImage1} style="width: 41px"/><br/>` + Date + " " + DoorsOpen + "<br/>" + Address, height: "256" } // Title: Artist name, Description:  // Todo // swap artist name and venue name?
                , "pushPinOption":{ title: Venue, description: null, color: '#1A237E' } // Title: Venue name. Description: remains blank.
                , "infoboxAddHandler": {"type" : "click", callback: function() { window.open('artist/' + Id, '', "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes");} }
                , "pushPinAddHandler": {"type" : "click", callback: function() { window.open('artist/' + Id, '', "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes");} }
            };
        };

        var pushPinsData = new Array();
        
        for (var i = 0; i < artistData.length; i++) {
            pushPinsData.push(pushPinGeneric(artistData[i].location, artistData[i].name, artistData[i].date, artistData[i].venue, artistData[i].id, artistData[i].doorsOpen, artistData[i].streetAddress ))

        }

        // artistData.forEach(function(element) {
        //     pushPinGeneric = {}; // javascript needs to clear the reference.
        //     pushPinGeneric.location = element.location;
        //     pushPinGeneric.infoboxOption.title = element.name;
        //     pushPinGeneric.infoboxOption.description = element.date;
        //     pushPinGeneric.pushPinOption.title = element.venue;

        //     pushPinGeneric.infoboxAddHandler.callback = function() { window.open(element.id, '', "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes");};
        //     pushPinGeneric.pushPinAddHandler.callback = function() { window.open(element.id, '', "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes");};

        //     pushPinsData.push(pushPinGeneric);
            
        // });

        pushPinsData.forEach(function (element) {
            console.log (element.location);

        })

        return (  
                <React.Fragment>
                    <NavBar/>
                    <div className='Map'>
                        <ReactBingmaps 
                            bingmapKey = "Akd0eKvg21kj-QnRjHIM0-UKsO7RltEN7-WEww19yUdU1PBq4egrJSB06lF5x3c9" 
                            center = {this.state.location}
                            zoom = {16}
                            infoboxesWithPushPins = {pushPinsData}> 
                        </ReactBingmaps>
                    </div>
                </React.Fragment>
        );
    }
}

export default Map;