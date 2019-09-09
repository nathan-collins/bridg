import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NoVehicle from './NoVehicle';

configure({ adapter: new Adapter() });

describe('<NoVehicle />', () => {
  it('renders the component on shallow', () => {
    shallow(<NoVehicle />);
  });

  it('renders the component on mount', () => {
    mount(<NoVehicle />);
  });

  it('displays the car name', () => {
    const wrapper = shallow(<NoVehicle />);
    console.log(wrapper.debug());

    expect(wrapper.find('p').text()).toBe('Does not currently have a vehicle');
  });
});
