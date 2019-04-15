import moment from 'moment';

//Get Visible EXPENSES
export default (expenses, { text, sortBy, startDate, endDate, }) => {
  return expenses.filter((expense) => {
    const createdAtMoment = moment(expense.CreatedAt);
    const startDateMatch = startDate ? startDate.isSameOrBefore(createdAtMoment, 'day'): true;
    const endDateMatch = endDate ? endDate.isSameOrBefore(createdAtMoment,'day'): true;
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
