import { connect } from 'react-redux';
import React from 'react';
import { getUser } from '../../actions/users_actions';
import { getUsersSongs } from '../../actions/songs_actions';
import UserShow from '../pages/user_show';

const mapStateToProps = (state, ownProps) => {
  const songs = Object.keys(state.entities.songs).map((songId) => {
    return state.entities.songs[songId];
  });
  return {
    user: state.entities.users[ownProps.match.params.userId] || {},
    songs: songs
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: () => dispatch(getUser(ownProps.match.params.userId)),
    getUsersSongs: () => dispatch(getUsersSongs(ownProps.match.params.userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
