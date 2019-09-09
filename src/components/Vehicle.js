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
    containerElement: (
      <div
        style={{
          height: `300px`,
          width: `500px`,
          display: `flex`,
          flexDirection: `column`,
          justifyContent: `center`,
          border: `1px solid #000000`,
        }}
      />
    ),
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
)(({ capacity, latitude, longitude, name, passengers }) => {
  return (
    <div>
      <h4>Vehicle Details</h4>
      <h1>{name}</h1>
      <GoogleMap defaultZoom={15} defaultCenter={{ lat: latitude, lng: longitude }}>
        <Marker position={{ lat: latitude, lng: longitude }} />
      </GoogleMap>
      <div>
        Capacity: {passengers}/{capacity}
      </div>
    </div>
  );
});

Vehicle.propTypes = {
  capacity: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  passengers: PropTypes.number.isRequired,
};

export default Vehicle;
