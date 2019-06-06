import React from 'react';
import ReactShallowRender from 'react-test-renderer/shallow';
import { Header }  from '../../components/Header';
import { shallow } from 'enzyme';

test('should render header correctly', () => {
  const wrapper = shallow(<Header startLogout={()=>{}} />);
  expect(wrapper).toMatchSnapshot();
  // const renderer = new ReactShallowRender();
  // renderer.render(<Header/>);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  // console.log(renderer.getRenderOutput());
});

//Test case for button call
test('should call startLogout on button click', () => {
  const startLogout = jest.fn();
  const wrapper = shallow(<Header startLogout = {startLogout}/>);
  wrapper.find('button').simulate('click');
  expect(startLogout).toHaveBeenCalled();
});
