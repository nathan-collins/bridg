import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Vehicle from './Vehicle';

configure({ adapter: new Adapter() });

describe('<Vehicle />', () => {
  it('renders the component on shallow', () => {
    shallow(<Vehicle />);
  });

  it('renders the component on mount', () => {
    mount(<Vehicle />);
  });
});
