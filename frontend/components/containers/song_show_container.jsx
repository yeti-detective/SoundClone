import { connect } from 'react-redux';
import React from 'react';
// import { withRouter } from 'react-router-dom';
import { getSong, getSongs } from '../../actions/songs_actions';
import { getUsersSongs } from '../../actions/users_actions';
import SongShow from '../pages/song_show';

const mapStateToProps = (state, ownProps) => {
  return {
    thisSong: state.entities.songs[ownProps.match.params.songId],
    thisUser: state.entities.users[songs[ownProps.match.params.songId].user_id]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSong: (id) => dispatch(getSong(id)),
    getUsersSongs: (userId) => dispatch(getUsersSongs(userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongShow);
