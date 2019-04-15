import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>Info</h1>
    <p> The info is: {props.info}</p>
  </div>
);

const Apples = (props) => (
  <div>
    <h1> Your apple type is: </h1>
      <p> { props.apple }</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      { props.isAdmin && <p>This is our private info! Do not share.</p>}
      <WrappedComponent {...props}/>
    </div>
  );
};

const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (<p>Apples</p>): (<p>Authenticate!</p>)}
      <WrappedComponent {...props}/>
    </div>
  )
};

const AuthInfo =  requireAuthentication(Info);

const AdminInfo = withAdminWarning(Info);
const AppleInfo = withAdminWarning(Apples);

const SuperComponent = () => (
  <div>
    <AdminInfo isAdmin = {true} info = "Marina ie. "/>
    <AppleInfo isAdmin = {true} apple = "Marinayes"/>
  </div>
);


// ReactDOM.render(<SuperComponent/>, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info={"Two Chainz"}/>, document.getElementById('app'));
