import {
  setTextFilter,
  sortByDate,
  sortByAmount,
  setStartDate,
  setEndDate
} from '../../actions/filters';
import moment from 'moment';
//Set Text Filter
test('should set text filter to alotted text', () => {
  const text = setTextFilter("Apple Sauce");
  expect(text).toEqual({
    type:'SET_TEXT_FILTER',
    text: "Apple Sauce"
  });
});

//Set Text Filter w/ Default
test('set text filter with default', () => {
  const text = setTextFilter();
  expect(text).toEqual({
    type:'SET_TEXT_FILTER',
    text: ''
  });
})

//Set Sort By Amount
test('should sort by amount', () =>{
  expect(sortByAmount()).toEqual({type:'SORT_BY_AMOUNT'})
});

//Set Sort By Date
test('should sort by date', () =>{
  const type = sortByDate();
  expect(type).toEqual({
    type:'SORT_BY_DATE'
  })
});

//Set Start Date
test('sets Start Date', () => {
  const now = moment(0);
  const setDate = setStartDate(now);
  expect(setDate).toEqual({
    type:'SET_START_DATE',
    startDate:moment(0)
  });
});

//Set End Date
test('sets End Date', () => {
  const now = moment(1);
  const setDate = setEndDate(now);
  expect(setDate).toEqual({
    type:'SET_END_DATE',
    endDate:moment(1)
  });
});
