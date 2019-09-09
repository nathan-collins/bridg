import React, { useEffect, useState } from 'react';
import './App.css';
import Driver from './Driver';

function App() {
  const [drivers, setDrivers] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  /**
   */
  useEffect(() => {
    const fetchDriversVehicles = async () => {
      try {
        const driversResult = fetch(
          `https://s3-ap-southeast-2.amazonaws.com/bridj-coding-challenge/drivers.json`,
          {}
        ).then((response) => response.json());

        const vehiclesResult = fetch(
          'https://s3-ap-southeast-2.amazonaws.com/bridj-coding-challenge/vehicles.json',
          {}
        ).then((response) => response.json());

        await Promise.all([driversResult, vehiclesResult]).then((values) => {
          setDrivers(values[0].drivers);
          setVehicles(values[1].vehicles);
        });
      } catch (error) {
        if (error.name !== 'AbortError') {
          // handle error
        }
      }
    };

    fetchDriversVehicles();
  }, []);

  const listDrivers = () => {
    if ((!drivers || drivers.length === 0) && (!vehicles || vehicles.length === 0)) return '';

    const driversAltered = drivers.filter((driver, index) => {
      const vehicleData = vehicles.filter((vehicle) => {
        return vehicle.driver_id === driver.id;
      });

      drivers[index].vehicles = vehicleData;

      return drivers;
    });

    return driversAltered.map((driver, index) => (
      <Driver
        key={driver.id}
        firstName={driver.first_name}
        lastName={driver.last_name}
        vehicles={driver.vehicles}
      />
    ));
  };

  return <div className="app">{listDrivers(drivers, vehicles)}</div>;
}

export default App;
