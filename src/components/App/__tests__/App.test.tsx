import App from '../App';
import { shallow } from 'enzyme';
import * as React from 'react';

describe('App', () => {
  it('should render snapshot', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
