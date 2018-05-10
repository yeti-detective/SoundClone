import { connect } from 'react-redux';
import React from 'react';
import { withRouter } from 'react-router-dom';
import { logout } from '../../actions/session_actions';
import UserHeaderBar from '../small_components/user_header_bar';

const mapStateToProps = state => ({
  currentUser: state.entities.users[state.session.id] || {}
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(UserHeaderBar));
