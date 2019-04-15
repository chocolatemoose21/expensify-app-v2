import React from 'react';
import ReactShallowRender from 'react-test-renderer/shallow';
import Header from '../../components/Header';
import { shallow } from 'enzyme';

test('should render header correctly', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper).toMatchSnapshot();
  // const renderer = new ReactShallowRender();
  // renderer.render(<Header/>);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  // console.log(renderer.getRenderOutput());
});
