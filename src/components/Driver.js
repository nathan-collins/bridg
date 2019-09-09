import React, { useEffect } from 'react';
import './Driver.css';
import PropTypes from 'prop-types';

import Vehicle from './Vehicle';
import NoVehicle from './NoVehicle';

const Driver = ({ firstName, lastName, vehicles }) => {
  useEffect(() => {}, []);

  /**
   */
  const listVehicles = () => {
    if (!vehicles || vehicles.length === 0) return <NoVehicle key="1" />;
    return vehicles.map((vehicle) => {
      return (
        <div id="vehicles">
          <Vehicle
            key={vehicle.id}
            capacity={vehicle.capacity}
            latitude={vehicle.latitude}
            longitude={vehicle.longitude}
            name={vehicle.name}
            passengers={vehicle.passengers}
          />
        </div>
      );
    });
  };

  return (
    <div className="driver">
      <h1>
        {firstName} {lastName}
      </h1>
      {listVehicles()}
    </div>
  );
};

/**
 */
Driver.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  vehicles: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      capacity: PropTypes.number,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      name: PropTypes.name,
      passenger: PropTypes.number,
    })
  ),
};

export default Driver;
