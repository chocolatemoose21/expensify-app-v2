import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListItem from './ExpenseListItem';
import ExpenseListFilters from './ExpenseListFilters';



const ExpenseDashboardPage = () => (
  <div>
    <p> This is some text that works! </p>
    <ExpenseList/>
    <ExpenseListItem/>
    <ExpenseListFilters/>
  </div>
);

export default ExpenseDashboardPage;
