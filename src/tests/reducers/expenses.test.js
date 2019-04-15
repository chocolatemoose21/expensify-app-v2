import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';


test('should set default state to empty array', () => {
  const state = expensesReducer(undefined,{ type: '@@INIT'});
  //Make assertion
  expect(state).toEqual([]);
});

test('should remove expense by id', () => {
  const action = {
    type:'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0],expenses[2]]);
});

test('should not remove expense by id', () => {
  const action = {
    type:'REMOVE_EXPENSE',
    id: -1
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

//Add Expense
test('should add expense', () => {
  //1. Create a const expense
  const expense  = {
    id:'4',
    description: "Farm Animals",
    amount: 500,
    createdAt: 1
  };
  //2. Create an action
  const action = {
    type: "ADD_EXPENSE",
    expense
  };
  //3. Dispatch
  //ERROR- you call it with the expenses fixture data - duh you already have the fucking EXPENSE in the action object

  const state = expensesReducer(expenses, action);

  //4. Assertion
  //ERROR: You expected it to equal an ARRAY say it
  //ERROR: Just state not state.expenses.
  //VAL: You were thinking in the right direction- spread operator and , the expense
  expect(state).toEqual([...expenses,expense])

});
/*
Reflection ! YES! all four steps were correct that I outlined in the approach.
*/


//Edit Expense
test('should edit expense', () => {
  //ERROR: Pick the property you want to change on an expense
  const amount = 6000;

  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[1].id,
    updates:{
      amount
    }
  }

  const state = expensesReducer(expenses,action);
  //Youre expecting a specific expense to be something.
  expect(state[1].amount).toBe(amount);
});

//Should not edit expense if expense not found
// test('should not edit expense if expense not found', () => {});
test('should not edit an expense', () => {
  //ERROR: Pick the property you want to change on an expense
  const amount = 6000;
  const action = {
    type: "EDIT_EXPENSE",
    id: -1,
    updates:{
      amount
    }
  };
  const state = expensesReducer(expenses,action);
  //Youre expecting a specific expense to be something.
  expect(state).toEqual(expenses);
});
