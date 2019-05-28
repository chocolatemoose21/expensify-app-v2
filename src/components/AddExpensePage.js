import React from 'react';
import { connect } from 'react-redux';
import { startAddExpense } from '../actions/expenses';
import ExpenseForm from './ExpenseForm';

const AddExpensePage = (props) => (
  <div>
    <p> This is my add expense component </p>
    <ExpenseForm
      onSubmit = {(expense)=>{
        props.dispatch(startAddExpense(expense))
        props.history.push('/');
      }}
      />
  </div>
);

export default connect()(AddExpensePage);
