import { addExpense, removeExpense, editExpense } from '../../actions/expenses';

test('removing expense', () => {
  const action = removeExpense({id: '123abc'});
  expect(action).toEqual({
    type:'REMOVE_EXPENSE',
    id:'123abc'
  });
});


test('Should be sending edit expense', () => {
  const action = editExpense('abc', {note:"apples"});
  expect(action).toEqual({
    type:'EDIT_EXPENSE',
    id:'abc',
    updates: {
      note: 'apples'
    }
  });
});

test('Add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    note: 'Apple Sauce',
    amount: 500,
    createdAt: 111
  }
  const expense = addExpense(expenseData);
  expect(expense).toEqual({
    type: "ADD_EXPENSE",
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('Add expense action default value', () => {
  const expense = addExpense();
  expect(expense).toEqual({
    type:"ADD_EXPENSE",
    expense: {
      id:expect.any(String),
      description: '',
      amount: 0,
      createdAt: 0,
      note:''
    }
  })
});
