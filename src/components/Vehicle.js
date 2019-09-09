import React from 'react';
import './Driver.css';
import PropTypes from 'prop-types';
import { withScriptjs, withGoogleMap, Marker, GoogleMap } from 'react-google-maps';

import { compose, withProps, withState, withHandlers } from 'recompose';

const Vehicle = compose(
  withProps({
    googleMapURL:
      'https://maps.googleapis.com/maps/api/js?key=AIzaSyAeDg8_7c_sBeWmR5lEblIAhW7oT_oDxxk&v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withState('zoom', 'onZoomChange', 2),
  withHandlers(() => {
    const refs = {
      map: undefined,
    };

    return {
      onMapMounted: () => (ref) => {
        refs.map = ref;
      },
      onZoomChanged: ({ onZoomChange }) => () => {
        onZoomChange(refs.map.getZoom());
      },
    };
  }),
  withScriptjs,
  withGoogleMap
)(({ capacity, latitude, longitude, name }) => {
  return (
    <div className="driver">
      <h1>{name}</h1>
      <div id="map">
        <GoogleMap defaultZoom={15} defaultCenter={{ lat: latitude, lng: longitude }}>
          <Marker position={{ lat: latitude, lng: longitude }} />
        </GoogleMap>
      </div>
      <div>{capacity}</div>
    </div>
  );
});

Vehicle.propTypes = {
  capacity: PropTypes.string.isRequired,
  latitude: PropTypes.string.isRequired,
  longitude: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Vehicle;
