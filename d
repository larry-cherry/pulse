[1mdiff --cc src/containers/Map/Map.js[m
[1mindex 245109c,e3682cc..0000000[m
[1m--- a/src/containers/Map/Map.js[m
[1m+++ b/src/containers/Map/Map.js[m
[36m@@@ -1,8 -1,20 +1,11 @@@[m
  import React, { Component } from 'react';[m
[31m -<<<<<<< HEAD[m
[32m+ [m
  import './Map.css';[m
[31m -// import mapImage from './austinmap.PNG';[m
  import { ReactBingmaps } from 'react-bingmaps';[m
[32m+ import NavBar from '../../components/NavBar/NavBar';[m
[31m -//import { array } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/3.3/node_modules/@types/prop-types';[m
[31m -//import MapScript from './MapScript.html';[m
[32m+ [m
[31m -=======[m
[31m -import './Map.css';[m
[31m -// import mapImage from './austinmap.PNG';[m
[31m -import { ReactBingmaps } from 'react-bingmaps';[m
[31m -//import { array } from '../../../../../../../../AppData/Local/Microsoft/TypeScript/3.3/node_modules/@types/prop-types';[m
[31m -//import MapScript from './MapScript.html';[m
[31m ->>>>>>> 99902a8cca1e1fbb3fc83f6970359968eee44ed7[m
[32m +import axios from 'axios';[m
[32m +import xmlParser from 'react-xml-parser';[m
  [m
  class Map extends Component {[m
  [m
[36m@@@ -88,16 -92,44 +91,18 @@@[m
              pushPinsData.push(pushPinGeneric);[m
          });[m
  [m
[31m-         return ([m
[31m-             <div className='Map'>[m
[31m-                 <ReactBingmaps [m
[31m-                     bingmapKey = "Akd0eKvg21kj-QnRjHIM0-UKsO7RltEN7-WEww19yUdU1PBq4egrJSB06lF5x3c9" [m
[31m-                     center = {this.state.location}[m
[31m-                     infoboxesWithPushPins = {pushPinsData}[m
[31m-                     > [m
[31m-                 </ReactBingmaps>[m
[31m-             </div>[m
[31m-         )[m
[31m -<<<<<<< HEAD[m
[32m+         return (  [m
[32m+                 <React.Fragment>[m
[32m+                     <NavBar/>[m
[32m+                     <div className='Map'>[m
[32m+                         <ReactBingmaps [m
[32m+                             bingmapKey = "Akd0eKvg21kj-QnRjHIM0-UKsO7RltEN7-WEww19yUdU1PBq4egrJSB06lF5x3c9" [m
[32m+                             center = {this.state.location}[m
[32m+                             infoboxesWithPushPins = {pushPinsData}> [m
[32m+                         </ReactBingmaps>[m
[31m -                        <iframe width="400" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" [m
[31m -                            src="http://dev.virtualearth.net/embeddedMap/v1/ajax/aerial?zoomLevel=10&center=47.5_-122.5&pushpins=47.5_-122.5"/>[m
[31m -                        <div >[m
[31m -                            <a id="largeMapLink" target="_blank" href="https://www.bing.com/maps?cp=30.269499999999994~-97.7439&amp;sty=r&amp;lvl=11&amp;FORM=MBEDLD">View Larger Map</a> &nbsp; | &nbsp;[m
[31m -                            <a id="dirMapLink" target="_blank" href="https://www.bing.com/maps/directions?cp=30.269499999999994~-97.7439&amp;sty=r&amp;lvl=11&amp;rtp=~pos.30.269499999999994_-97.7439____&amp;FORM=MBEDLD">Get Directions</a>[m
[31m -                        </div>[m
[32m+                     </div>[m
[32m+                 </React.Fragment>[m
[32m+         );[m
[31m -=======[m
[31m -        return ([m
[31m -            <div className='Map'>[m
[31m -                <ReactBingmaps [m
[31m -                    bingmapKey = "Akd0eKvg21kj-QnRjHIM0-UKsO7RltEN7-WEww19yUdU1PBq4egrJSB06lF5x3c9" [m
[31m -                    center = {this.state.location}[m
[31m -                    infoboxesWithPushPins = {pushPinsData}[m
[31m -                    > [m
[31m -                </ReactBingmaps>[m
[31m -                >>>[m
[31m -                    <iframe width="400" height="300" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" [m
[31m -                        src="http://dev.virtualearth.net/embeddedMap/v1/ajax/aerial?zoomLevel=10&center=47.5_-122.5&pushpins=47.5_-122.5"/>[m
[31m -                    <div >[m
[31m -                        <a id="largeMapLink" target="_blank" href="https://www.bing.com/maps?cp=30.269499999999994~-97.7439&amp;sty=r&amp;lvl=11&amp;FORM=MBEDLD">View Larger Map</a> &nbsp; | &nbsp;[m
[31m -                        <a id="dirMapLink" target="_blank" href="https://www.bing.com/maps/directions?cp=30.269499999999994~-97.7439&amp;sty=r&amp;lvl=11&amp;rtp=~pos.30.269499999999994_-97.7439____&amp;FORM=MBEDLD">Get Directions</a>[m
[31m -                    </div>[m
[31m -            </div>[m
[31m -        )[m
[31m ->>>>>>> 99902a8cca1e1fbb3fc83f6970359968eee44ed7[m
      }[m
  }[m
  [m
