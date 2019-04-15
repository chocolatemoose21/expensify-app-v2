import moment from 'moment';

export default [{
  id:'1',
  description: "Apple Sauce",
  amount: 500,
  createdAt: 0
}, {
  id:'2',
  description: "Gum",
  amount: 900,
  createdAt: moment(0).subtract(4, 'days').valueOf()
}, {
  id:'3',
  description: "Soda",
  amount: 400,
  createdAt: moment(0).add(4,'days').valueOf()
}
];
