import { connect } from 'react-redux';
import React from 'react';
import { getUser } from '../../actions/users_action';
import UserShow from '../pages/user_show';

const mapStateToProps = (state, ownProps) => {
  debugger
  return {
    user: state.entities.users[ownProps.match.params.userId]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: () => dispatch(getUser(ownProps.match.params.userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
