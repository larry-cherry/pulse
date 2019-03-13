import React, { Component } from 'react';
import './Map.css';
import { ReactBingmaps } from 'react-bingmaps';
import axios from 'axios';
import xmlParser from 'react-xml-parser';

class Map extends Component {

    state = {
        location: [30.267170, -97.736500]
    }

    updateMapCity(location) {
        var latitude = 30.267170 // default austin
        var longitude = -97.736500 // default austin

        if (location = "CurentLocation"){
            if (navigator.geolocation) { navigator.geolocation.getCurrentPosition(showPosition); }
            
            function showPosition(position) {
                latitude = "Latitude: " + position.coords.latitude;
                longitude = position.coords.longitude;
            }
        }

        axios.get(`http://api.7digital.com/1.2/track/search?shopId=2020&oauth_consumer_key=7d4vr6cgb392&q=drake&usageTypes=adsupportedstreaming`, {
            responseType: 'json'})
            .then(res => {
            console.log(res);
            console.log(res.data);
            //res.data.forEach()
        })

        switch(location)
        {
            case "CurrentLocation": this.setState({location: [latitude, longitude]}); break;
            case "Austin": this.setState({location: [30.267170, -97.736500]}); break;
            case "Houston": this.setState({location: [29.7604, 95.3698]}); break;
        }
    }

    render(){
        var windowObjectReference;
        this.callBackMethod = function() {
            windowObjectReference = window.open("www.google.com", 'google', "menubar=yes,location=yes,resizable=yes,scrollbars=yes,status=yes");
        }

        this.updateMapCity("Houston");

        var pushPinGeneric = {
            "location":[0, 0] // default/generic location
            , "url": "http://www.cnn.com/"
            , "windowName": "CNN_WindowName"
            , "addHandler": {"type" : "click", callback: this.callBackMethod }
            , "addHandler":"mouseover" //on mouseover the pushpin, infobox shown
            , "infoboxOption": { title: '###InsertArtistName', description: '###InsertArtistDetails' } // Title: Artist name, Description:  // Todo // swap artist name and venue name?
            , "pushPinOption":{ title: '###InsertVenueName', description: '', color: '#1A237E' } // Title: Venue name. Description: remains blank.
            , "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod }
            , "pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
        }

        var artistGeneric = {
            "name": "###Name"
            , "venue": "###Venue"
            , "details" : "###Details" // TODO fill this in w/ details
            , "location": [30.267170, -97.736500]
            , "genre": "###Genre"
            , "showTime": "###Showtime"
        }
        
        var pushPinsData = new Array();
        var artistData = new Array();
        
        artistGeneric.location = [30.267170, -97.736500]
        artistGeneric.name = "Bob Dylan"; 
        artistGeneric.venue = "Dirty Dog Bar";
        artistGeneric.genre = "Folk";
        artistGeneric.showTime = "3/12/2019";

        artistData.push(artistGeneric);

        artistData.forEach(function(element) {
            pushPinGeneric.location = element.location;
            pushPinGeneric.infoboxOption.title = element.name;
            pushPinGeneric.infoboxOption.description = element.showTime;
            pushPinGeneric.pushPinOption.title = element.venue;

            pushPinsData.push(pushPinGeneric);
        });

        return (
            <div className='Map'>
                <ReactBingmaps 
                    bingmapKey = "Akd0eKvg21kj-QnRjHIM0-UKsO7RltEN7-WEww19yUdU1PBq4egrJSB06lF5x3c9" 
                    center = {this.state.location}
                    infoboxesWithPushPins = {pushPinsData}
                    > 
                </ReactBingmaps>
            </div>
        )
    }
}

export default Map;