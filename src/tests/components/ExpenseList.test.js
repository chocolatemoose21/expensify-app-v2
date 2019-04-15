import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseList } from '../../components/ExpenseList';
import expenses from '../fixtures/expenses';

test('should render ExpenseList with expenses', () => {
  //Constants +
    //Call to render
    const wrapper = shallow(<ExpenseList expenses={expenses}/>);

  //Assertion
  expect(wrapper).toMatchSnapshot();
});

test('should render expense list with empty message', () => {
  //Call to render
  const wrapper = shallow(<ExpenseList {...expenses[0]}/>);
  //Assertion
  expect(wrapper).toMatchSnapshot();
});
