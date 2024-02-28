// src/App.jsx
import React from 'react';
import { connect } from 'react-redux';
import { loginUserAction } from '../redux/actions';

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (username) => dispatch(loginUserAction(username)),
  };
};

const App = ({ user, loginUser }) => {
  return (
    <div>
      <h1>Hello, {user.name}!</h1>
      {user.isLoggedIn ? (
        <p>You are logged in.</p>
      ) : (
        <button onClick={() => loginUser('Liku')}>Login</button>
      )}
    </div>
  );
};

const ConnectedApp = connect(mapStateToProps, mapDispatchToProps)(App);

export default ConnectedApp;
