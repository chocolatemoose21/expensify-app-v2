import React from 'react';
import { Link } from 'react-router-dom';


const ExpenseListItem = ({ id, description, amount, createdAt}) => (
  <div>
    <Link className= "list-item" to={`/edit/${id}`}>
      <div>
        <p>{description}</p>
      </div>

    </Link>
    <h3>{amount}</h3>
    <p>{createdAt}</p>

  </div>
);

export default ExpenseListItem;
