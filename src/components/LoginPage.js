import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

//The functionality I want is when you click a button it goes there.

export const LoginPage = ({ startLogin }) => (

  <div className="box-layout">
    <div className = "box-layout__box">
      <h1 clasName = "box-layout__title ">Expensify</h1>
        <p> It's time to get your expenses under control</p>
        <button onClick={startLogin} className = "button"> Login With Google </button>
    </div>
  </div>
);

//This is the function to generate the action (i.e. dispatch the taxi)
const mapDispatchToProps = (dispatch) => ({
  startLogin: ()=> dispatch(startLogin())
});

//This is connecting the component to the dispact action.
export default connect(undefined, mapDispatchToProps)(LoginPage);
