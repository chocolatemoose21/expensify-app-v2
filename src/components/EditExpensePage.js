import React from 'react';
import { connect } from 'react-redux';
import  ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return(
  <div>
    <div className = "content-container">
      <div>
        <h1> Edit Expense</h1>
      </div>

    <ExpenseForm
      expense = {props.expense}
      onSubmit={(expense) => {
        props.dispatch(editExpense(props.expense.id,expense));
        props.history.push('/')
      }}
      />
      <button
        className = "button--secondary"
        onClick = {(e) => {
          props.dispatch(removeExpense({id:props.expense.id}));
          props.history.push('/')
          }}>Remove</button>
      </div>
  </div>
)
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense)=>expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);
