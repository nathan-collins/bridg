import React from 'react';
import './Driver.css';
import PropTypes from 'prop-types';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const Vehicle = ({ capacity, latitude, longitude, name, passengers }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: 'AIzaSyAeDg8_7c_sBeWmR5lEblIAhW7oT_oDxxk', // ,
  });

  const onLoad = React.useCallback(function onLoad(mapInstance) {
    // Map loaded
  });

  const renderMap = () => {
    return (
      <GoogleMap
        zoom={12}
        mapContainerStyle={{
          height: '300px',
          width: '500px',
        }}
        center={{ lat: latitude, lng: longitude }}
        onLoad={onLoad}
      >
        <Marker
          position={{
            lat: latitude,
            lng: longitude,
          }}
        />
      </GoogleMap>
    );
  };

  if (loadError) {
    return <div>Map cannot be loaded right now, sorry.</div>;
  }

  return (
    <div>
      <h4>Vehicle Details</h4>
      <h1>{name}</h1>
      {isLoaded ? renderMap() : ''}
      <div>
        Capacity: {passengers}/{capacity}
      </div>
    </div>
  );
};

Vehicle.propTypes = {
  capacity: PropTypes.number.isRequired,
  latitude: PropTypes.number.isRequired,
  longitude: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  passengers: PropTypes.number.isRequired,
};

export default Vehicle;
