import { connect } from 'react-redux';
import React from 'react';
import { getUsers } from '../../actions/users_actions';
import { getSongs, getSong } from '../../actions/songs_actions';
import Stream from '../pages/stream';
import listifySliceOfState from '../../util/listify_slice_of_state';

const mapStateToProps = (state) => {
  const songs = listifySliceOfState(state.entities.songs);
  return {
    users: state.entities.users,
    songs: songs
  };
};


const mapDispatchToProps = dispatch => {
  return {
    getUsers: () => dispatch(getUsers()),
    getSongs: () => dispatch(getSongs()),
    getSong: (id) => dispatch(getSong(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Stream);
