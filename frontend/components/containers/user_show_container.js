import { connect } from 'react-redux';
import React from 'react';
import { getUser } from '../../actions/users_action';
import UserShow from '../pages/user_show';

const mapStateToProps = ({ users }, ownProps) => {
  return {
    user: users[users[ownProps.match.params.userId]]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUser: (id) => dispatch(getUser(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
