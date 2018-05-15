import { connect } from 'react-redux';
import React from 'react';
// import { withRouter } from 'react-router-dom';
import { getSong, getUsersSongs } from '../../actions/songs_actions';
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
    getUser: () => dispatch(getUser(ownProps.match.params.userId)),
    getUsersSongs: () => dispatch(getUsersSongs(ownProps.match.params.userId))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongShow);
