import { createStore, combineReducers } from 'redux';
import uuid from 'uuid' ;

//EXPENSES REDUCER

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
      //How do you remove an expense by idea from state from an array? You use filter!
      //State.filter gives you an new array.
    case 'REMOVE_EXPENSE':
      return state.filter(({ id } ) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map((expense)=> {
        if (expense.id === action.id){
          return{
            ...expense,
            ...action.updates
          }
        } else {
          return expense;
        }
      });
      default:
        return state;
  }
};

//ADD_EXPENSE
const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  }
   = {}) => ({
  type:'ADD_EXPENSE',
  expense: {
    id:uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

//REMOVE_EXPENSE
const removeExpense = ( { id } = {}) => ({
  type:'REMOVE_EXPENSE',
  id
});

//EDIT_EXPENSE
const editExpense = (id, updates) => ({
  type:'EDIT_EXPENSE',
  id,
  updates
});
//SET_TEXT_FILTER
const setTextFilter = (text = '') => ({
  type:'SET_TEXT_FILTER',
  text
});
//SORT_BY_DATE
const sortByDate = () => ({
  type:'SORT_BY_DATE',
});
//SORT_BY_AMOUNT
const sortByAmount = () =>({
  type:'SORT_BY_AMOUNT',
});
//SET_START_DATE
const setStartDate = (startDate) => ({
  type:'SET_START_DATE',
  startDate
})
//SET_END_DATE
const setEndDate = (endDate) => ({
  type:'SET_END_DATE',
  endDate
})


//FILTER REDUCER DEFAULT STATE
const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

//FILTERS REDUCER
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_TEXT_FILTER':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      }
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'amount'
      }
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.startDate
      }
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.endDate
      }
    default:
      return state;
  }
};

//create createStore
const store = createStore(
  combineReducers({
    expenses:expensesReducer,
    filters: filtersReducer
  }
  )
);

//a created at = 12/1/2019
//b createAt = 12/2/19 Most recent expenses up top =b is more recent.

//Get Visible EXPENSES
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate, }) => {
  return expenses.filter((expense) => {
    const startDateMatch= typeof startDate !== 'number' || expense.createdAt >= startDate;
    const endDateMatch = typeof endDate !=='number' ||expense.createAt <= endDate;
    const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a,b)=>{
    if (sortBy === 'date'){
      return a.createdDate < b.createdAt ? 1 : -1;
    } else if (sortBy === 'amount'){
      return a.amount < b.amount ? 1:-1;
    }
  });
};

//store subscribe
store.subscribe(()=>{
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
})


//Remove Expense Test



const expenseOne = store.dispatch(addExpense({ description:'Rent', amount:100, createdAt:-21000}));
const expenseTwo = store.dispatch(addExpense({ description:'Coffee', amount:300, createdAt:-1000}));

//store.dispatch(setTextFilter('Coffee'))

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
//
// store.dispatch(editExpense({ id:expenseTwo.expense.id, amount:500}));
//
// store.dispatch(setTextFilter('Rent'));
//
// store.dispatch(setTextFilter(''));
//
//store.dispatch(sortByDate());
 store.dispatch(sortByAmount());





//store.dispatch(setStartDate(2000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(1240));

console.log(expenseOne)

const demoState = {
  expenses:[{
    id: 'werwesdfs',
    description: 'Rent',
    note: 'This was the final payment',
    amount: 54500,
    createdAt:0
  }],
  filters: {
    text:'rent',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
  }
}
