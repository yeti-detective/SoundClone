import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import UserHeaderBar from '../small_components/user_header_bar';
import { getUser } from '../../actions/users_actions';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id] || {}
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  getUser: (id) => dispatch(getUser(id))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHeaderBar));
