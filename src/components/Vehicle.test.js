import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Vehicle from './Vehicle';

configure({ adapter: new Adapter() });

describe('<Vehicle />', () => {
  it('renders the component on shallow', () => {
    shallow(
      <Vehicle capacity={12} latitude={96.1} longitude={127.0} name="Car name" passengers={12} />
    );
  });

  it('renders the component on mount', () => {
    mount(
      <Vehicle capacity={12} latitude={96.1} longitude={127.0} name="Car name" passengers={12} />
    );
  });

  it('displays the car name', () => {
    const wrapper = shallow(
      <Vehicle capacity={12} latitude={96.1} longitude={127.0} name="Car name" passengers={12} />
    );

    expect(wrapper.find('h1').text()).toBe('Car name');
  });

  it('is capacity loaded', () => {
    const wrapper = shallow(
      <Vehicle capacity={12} latitude={96.1} longitude={127.0} name="Car name" passengers={12} />
    );

    expect(wrapper.find('.capacity').text()).toBe('Capacity: 12/12');
  });
});
