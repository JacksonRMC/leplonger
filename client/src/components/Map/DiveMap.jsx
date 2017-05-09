import React from 'react';
import keys from '../../../../keys.js';
import {withGoogleMap, GoogleMap, Marker, InfoWindow} from 'react-google-maps';
import MarkerContainer from './MarkerContainer.jsx';

const DiveMap = withGoogleMap(props => (
<<<<<<< HEAD
 <GoogleMap
   ref={props.onMapLoad}
   defaultZoom={14}
   defaultCenter={{lat: 37.787, lng: -122.458}}
   onClick={props.onMapClick}
 >
   {props.markers.map( (marker, index) => (
       <MarkerContainer marker={marker} key={index} />
   ))}
   </GoogleMap>
=======
  <GoogleMap
    ref={props.onMapLoad}
    defaultZoom={14}
    defaultCenter={{lat: 37.787, lng: -122.458}}
    onClick={props.onMapClick}
  >
    {props.markers.map( (marker, index) => (
        <MarkerContainer marker={marker} key={index} />
    ))}

    </GoogleMap>
>>>>>>> updating for merge
));

export default DiveMap;