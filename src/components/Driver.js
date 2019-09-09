import React, { useEffect } from 'react';
import './Driver.css';
import PropTypes from 'prop-types';

import Vehicle from './Vehicle';

const Driver = ({ firstName, lastName, vehicles }) => {
  useEffect(() => {}, []);

  /**
   */
  const listVehicles = () => {
    return vehicles.map((vehicle, index) => {
      return (
        <div>
          <Vehicle
            key={index}
            capacity={vehicle.capacity}
            latitude={vehicle.latitude}
            longitude={vehicle.longitude}
            name={vehicle.name}
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

Driver.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  vehicles: PropTypes.array,
};

export default Driver;
