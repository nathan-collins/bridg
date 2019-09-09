import React from 'react';
import ReactDOM from 'react-dom';
import { shallow, mount, render, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Driver from './Driver';

configure({ adapter: new Adapter() });

describe('<NumberContainer />', () => {
  it('renders the component on shallow', () => {
    shallow(<Driver />);
  });

  it('renders the component on mount', () => {
    mount(<Driver />);
  });
});
