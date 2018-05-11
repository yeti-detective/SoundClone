import { connect } from 'react-redux';
import React from 'react';
import { getUsers } from '../../actions/users_actions';
import Stream from '../pages/stream';

const mapStateToProps = (state) => {
  const users = Object.keys(state.entities.users).map((userId) => {
    return state.entities.users[userId];
  });
  return {
    users: users
  };
};


const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream);
