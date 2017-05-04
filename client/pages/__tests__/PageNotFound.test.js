/* eslint-env jest*/

import React from 'react';
import { shallow } from 'enzyme';
import { shallowToJson } from 'enzyme-to-json';
import PageNotFound from '../PageNotFound';

describe('<PageNotFound />', () => {
  it('should render correctly', () => {
    const wrapper = shallow(<PageNotFound />);
    expect(shallowToJson(wrapper)).toMatchSnapshot();
  });
});
