import React, { Component } from 'react';

import './Map.css'; 
import { ReactBingmaps } from 'react-bingmaps';
import NavBar from '../../components/NavBar/NavBar';

import axios from 'axios';
import { XMLParser } from 'react-xml-parser';

import img1 from '../../assets/artistImage/1.PNG';
import img2 from '../../assets/artistImage/2.PNG';
import img3 from '../../assets/artistImage/3.PNG';
import img4 from '../../assets/artistImage/4.PNG';
import img5 from '../../assets/artistImage/5.PNG';
import img6 from '../../assets/artistImage/6.PNG';
import img7 from '../../assets/artistImage/7.PNG';
import img8 from '../../assets/artistImage/8.PNG';
import img9 from '../../assets/artistImage/9.PNG';
import img10 from '../../assets/artistImage/10.PNG';
import img11 from '../../assets/artistImage/11.PNG';
import img12 from '../../assets/artistImage/12.PNG';
import img13 from '../../assets/artistImage/13.PNG';
import img14 from '../../assets/artistImage/14.PNG';
import img15 from '../../assets/artistImage/15.PNG';
import img16 from '../../assets/artistImage/16.PNG';
import img17 from '../../assets/artistImage/17.PNG';
import img18 from '../../assets/artistImage/18.PNG';
import img19 from '../../assets/artistImage/19.PNG';

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
            // console.log(res.data);

            var XMLParser = require('react-xml-parser');

            var jsonObject = new XMLParser().parseFromString(res.data);    // Assume xmlText contains the example XML
            // console.log(jsonObject.children[0].children[3].children[2].children[0].value); // title
            // console.log(jsonObject.children[0].children[3].children[2].children[1].value); // version
            // console.log(jsonObject.children[0].children[3].children[2].children[2].children[3].value); // image
            // console.log(jsonObject.children[0].children[3].children[1].value); // score
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
        artistData.push(artistGeneric(1, "AAerial", "3/16/2019", "7:30pm", "Dirty Dog Bar", "505 E 6th St., Austin, TX, 78701", "Progressive Rock", [30.26646, -97.73802] ));
        artistData.push(artistGeneric(2, "MAAD", "3/14/2019", "1:10am", "Palm Door on 6th", "508 E 6th St, Austin, TX 78701", "R&B, Soul", [30.26699, -97.73775] ));
        artistData.push(artistGeneric(3, "Aaron Cohen", "3/16/2019", "1:35am", "Mohawk Indoor", "912 Red River St, Austin, TX 78701E4", "Rap", [30.27005, -97.73611] ));
        artistData.push(artistGeneric(4, "EggPlantEgg", "3/13/2019", "1:00am", "Elysium", "705 Red River St, Austin, TX 78701", "Alt. Rock", [30.26767, -97.73658] ));
        artistData.push(artistGeneric(5, "Jake Lloyd", "3/16/2019", "10:55pm", "Barracuda", "611 E 7th St, Austin, TX 78701", "R&B", [30.26721, -97.73649] ));
        artistData.push(artistGeneric(6, "Khalid", "3/14/2019", "9:30pm", "UBER EATS House", "720 Brazos St, Austin, TX 78701", "Pop, R&B", [30.26924, -97.74116] ));
        artistData.push(artistGeneric(7, "PJAMA", "3/14/2019", "12:00am", "Russian House", "307 E 5th St, Austin, TX 78701", "Latin Rock", [30.26604, -97.74024] ));
        artistData.push(artistGeneric(8, ":PAPERCUTZ", "3/13/2019", "8:00pm", "CU29", "720 Brazos St, Austin, TX 78701", "Electronic", [30.26924, -97.74116] ));
        artistData.push(artistGeneric(9, "We The Machine", "3/13/2019", "8:10", "720 Club Patio", "720 Red River St, Austin, TX 78701", "Electronic", [30.2683, -97.73676] ));

        // Houston artists
        artistData.push(artistGeneric(10, "Adam Elara", "3/24/2019", "5:00pm", "Secret Group", "2101 Polk St, Houston, TX 77003", "Fluid", [29.74898, -95.35684] ));
        artistData.push(artistGeneric(11, "Wildfire", "3/15/2019", "6:00pm", "Credeur's Cajun Cooking", "6915 Spencer Hwy, Pasadena, TX 77505", "Country, Pop", [29.66454, -95.13257] ));
        artistData.push(artistGeneric(12, "Micah Edwards", "3/28/2019", "7:00pm", "Cafeza Sessions", "1720 Houston Ave, Houston, TX 77007", "Soul", [29.78445, -95.3721] ));
        artistData.push(artistGeneric(13, "Ella Mai", "3/24/2019", "7:00pm", "House of Blues Houston", "1204 Caroline St, Houston, TX 77002", "R&B, Soul", [29.74655, -95.36933] ));
        artistData.push(artistGeneric(14, "Lecrae", "3/21/2019", "7:00pm", "2nd Baptist Church", "19449 Katy Freeway, Houston, TX 77094", "Hip-Hop, Rap", [29.78057, -95.70988] ));
        artistData.push(artistGeneric(15, "Puddle of Mudd", "3/23/2019", "6:00pm", "Warehouse LIVE", "812 Saint Emanuel St, Houston, TX 7700", "Alt. Rock", [29.75226, -95.35455] ));
        artistData.push(artistGeneric(16, "Death Grips", "3/23/2019", "8:00pm", "White Oak Music Hall", "2915 N Main St, Houston, TX 77009", "Hip Hop", [29.78597, -95.367] ));
        artistData.push(artistGeneric(17, "Camila", "3/23/2019", "7:30pm", "Smart Financial Center", "18111 Lexington Blvd, Sugar Land, TX 77478", "Latin Pop", [29.58112, -95.64336] ));
        artistData.push(artistGeneric(18, "Excision", "3/22/2019", "7:00pm", "Revention Music Center", "520 Texas Ave, Houston, TX 77002", "Bass Music", [29.76222, -95.36687] ));
        artistData.push(artistGeneric(19, "Eminem", "3/22/2019", "5:00pm", "Cynthia Woods Mitchell Pavilion", "2005 Lake Robbins Dr, The Woodlands, TX 77380", "Rap", [30.161593,-95.4662177] ));
        // artistData.push(artistGeneric(11, "AA", "AA", "AA", "AA", "AA", "AA", [AA] ));
        // artistData.push(artistGeneric(12, "AA", "AA", "AA", "AA", "AA", "AA", [AA] ));
        // artistData.push(artistGeneric(13, "AA", "AA", "AA", "AA", "AA", "AA", [AA] ));
        // artistData.push(artistGeneric(14, "AA", "AA", "AA", "AA", "AA", "AA", [AA] ));

        function pushPinGeneric(Location, Name, Date, Venue, Id, DoorsOpen, Address) {
            switch(Id){
                case 1: var artistPicture = img1; break;
                case 2: var artistPicture = img2; break;
                case 3: var artistPicture = img3; break;
                case 4: var artistPicture = img4; break;
                case 5: var artistPicture = img5; break;
                case 6: var artistPicture = img6; break;
                case 7: var artistPicture = img7; break;
                case 8: var artistPicture = img8; break;
                case 9: var artistPicture = img9; break;
                case 10: var artistPicture = img10; break;
                case 11: var artistPicture = img11; break;
                case 12: var artistPicture = img12; break;
                case 13: var artistPicture = img13; break;
                case 14: var artistPicture = img14; break;
                case 15: var artistPicture = img15; break;
                case 16: var artistPicture = img16; break;
                case 17: var artistPicture = img17; break;
                case 18: var artistPicture = img18; break;
                case 19: var artistPicture = img19; break;
            }

            return{
                "location": Location
                , "addHandler": {"type" : "click"}
                , "addHandler":"mouseover"
                , "infoboxOption": { title: Name, description: `<img src=${artistPicture} style="width: 41px"/><br/>` + Date + " " + DoorsOpen + "<br/>" + Address, height: "256" } // Title: Artist name, Description:  // Todo // swap artist name and venue name?
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

        // pushPinsData.forEach(function (element) {
        //     // console.log (element.location);

        // })

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
                        <select>
                            <option value="1">Upcoming Tonight</option>
                            <option value="2">Upcoming Weekend</option>
                            <option value="3">Upcoming This Week</option>
                            <option value="4">Upcoming This Month</option>
                            <option value="5">Upcoming Next Month</option>
                            <option value="6">Upcoming This Year</option>
                            <option value="7">Last 30 Days</option>
                            <option value="8">Last 12 Months</option>
                            <option value="9">All Time</option>
                            <option value="10">Custom Date Range</option>
                        </select>

                        <select>
                            <option value="1">Austin</option>
                            <option value="1">Dallas</option>
                            <option value="1">Houston</option>
                            <option value="2">----- West Coast -----</option>
                            <option value="3">Los Angeles</option>
                            <option value="3">Phoenix</option>
                            <option value="3">Seattle</option>
                            <option value="3">Vancouver</option>
                            <option value="4">----- East Coast -----</option>
                            <option value="5">Charlotte</option>
                            <option value="5">Chicago</option>
                            <option value="5">Miami</option>
                            <option value="5">Montreal</option>
                            <option value="5">New Orleans</option>
                            <option value="5">New York</option>
                            <option value="6">----- Central America -----</option>
                            <option value="7">Guadalajara</option>
                            <option value="7">Havana</option>
                            <option value="7">Jamaica</option>
                            <option value="7">Mexico City</option>
                        </select>

                        <select>
                            <option value="1">Alt Rock</option>
                            <option value="1">Blues</option>
                            <option value="1">Classical</option>
                            <option value="1">Country</option>
                            <option value="1">Dubstep</option>
                            <option value="1">Electronic</option>
                            <option value="1">Folk</option>
                            <option value="1">Funk</option>
                            <option value="1">Gospel</option>
                            <option value="1">Hip Hop</option>
                            <option value="1">House</option>
                            <option value="1">Jazz</option>
                            <option value="1">Progressive Rock</option>
                            <option value="1">Punk Rock</option>
                            <option value="1">R&B</option>
                            <option value="1">Rap</option>
                            <option value="1">Reggae</option>
                            <option value="1">Rock</option>
                            <option value="1">Ska</option>
                            <option value="1">Soul</option>
                            <option value="1">Techno</option>
                            <option value="1">Vaporwave</option>
                        </select>
                    </div>
                </React.Fragment>
        );
    }
}

export default Map;