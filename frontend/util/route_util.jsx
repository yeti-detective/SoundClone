import React from 'react';
import { Route, Redirect, withRouter } from 'react-router';
import { connect } from 'react-redux';

// import Stream from '../components/stream';

const Auth = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
      !loggedIn? (
        <Component {...props} />
      ) : (
        <Redirect to="/stream" />
      )
    )} />
);

const NotLoggedIn = ({ component: Component, path, loggedIn, exact }) => (
  <Route path={path} exact={exact} render={(props) => (
      loggedIn? (
        <Redirect to="/stream" />
      ) : (
        <Component {...props} />
      )
    )} />
)

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});

export const AuthRoute = withRouter(connect(mapStateToProps, null)(Auth));
export const NotLoggedInRoute = withRouter(connect(mapStateToProps, null)(NotLoggedIn));
