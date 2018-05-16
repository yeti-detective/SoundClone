import { connect } from 'react-redux';
import React from 'react';
import { getCurrentSong } from '../../actions/songs_actions';
import SongCardIndex from '../small_components/song_card_index';

const mapDispatchToProps = dispatch => ({
  getCurrentSong: (id) => dispatch(getCurrentSong(id))
});

export default connect(
  null,
  mapDispatchToProps
)(SongCardIndex);
