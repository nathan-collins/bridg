import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Driver from './Driver';
import NoVehicle from './NoVehicle';

configure({ adapter: new Adapter() });

describe('<NumberContainer />', () => {
  it('renders the component on shallow', () => {
    shallow(<Driver firstName="Test" lastName="Name" />);
  });

  it('renders the component on mount', () => {
    mount(<Driver firstName="Test" lastName="Name" />);
  });

  it('Displays the drivers name', () => {
    const wrapper = shallow(<Driver firstName="Bob" lastName="Franks" />);
    expect(wrapper.find('h1').text()).toBe('Bob Franks');
  });

  it('displays a <NoVehicle /> component if no vehicle added', () => {
    const wrapper = shallow(<Driver firstName="Bob" lastName="Franks" />);
    expect(wrapper.find('NoVehicle').exists()).toBe(true);
  });

  it('displays a <Vehicle /> component if no vehicle added', () => {
    const vehicles = [
      {
        capacity: 16,
        driver_id: 3,
        id: 1,
        latitude: -27.462272,
        longitude: 153.008473,
        name: 'Serenity',
        passengers: 4,
      },
    ];
    const wrapper = shallow(<Driver firstName="Bob" lastName="Franks" vehicles={vehicles} />);
    expect(wrapper.find('#vehicles').exists()).toBe(true);
  });
});
