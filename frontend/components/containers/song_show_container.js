import { connect } from 'react-redux';
import React from 'react';
// import { withRouter } from 'react-router-dom';
import { getSong, getUsersSongs, getCurrentSong } from '../../actions/songs_actions';
import { getUser } from '../../actions/users_actions';
import SongShow from '../pages/song_show';

const mapStateToProps = (state, ownProps) => {
  return {
    thisSongId: ownProps.match.params.songId,
    songs: state.entities.songs || {},
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSong: (id) => dispatch(getSong(id)),
    getCurrentSong: () => dispatch(getCurrentSong(ownProps.match.params.songId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongShow);
