import { connect } from 'react-redux';
import React from 'react';
import { getSongs, getSongBadges } from '../../actions/songs_actions';
import { getUsers } from '../../actions/users_actions';
import SongBadgeIndex from '../small_components/song_badge_index';

const mapStateToProps = state => {
  const songs = Object.keys(state.entities.songs).map((songId) => {
    return state.entities.songs[songId];
  });
  return {
    songs: songs || [],
    users: state.entities.users || {}
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSongBadges: () => dispatch(getSongBadges())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongBadgeIndex);
