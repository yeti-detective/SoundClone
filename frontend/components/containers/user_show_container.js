import { connect } from 'react-redux';
import React from 'react';
import { getUser } from '../../actions/users_actions';
import { getSong } from '../../actions/songs_actions';
import UserShow from '../pages/user_show';

import listifySliceOfState from '../../util/listify_slice_of_state';

const mapStateToProps = (state, ownProps) => {
  const songs = listifySliceOfState(state.entities.songs);
  return {
    user: state.entities.users[ownProps.match.params.userId] || {},
    songs: songs
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getUser: () => dispatch(getUser(ownProps.match.params.userId)),
    getSong: (id) => dispatch(getSong(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserShow);
