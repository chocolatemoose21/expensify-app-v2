
const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [
        ...state,
        action.expense
      ]
      //How do you remove an expense by id from state from an array? You use filter!
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

export default expensesReducer;
