import { connect } from 'react-redux';
import React from 'react'; // is this really needed here?
import { getSong } from '../../actions/songs_actions';
import { getUser } from '../../actions/users_actions';

import PlayerFooterBar from '../small_components/player_footer_bar';

const mapStateToProps = state => {
  return {
    currentSong: state.currentSong,
    users: state.entities.users
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSong: () => dispatch(getSong),
    getUser: () => dispatch(getUser)
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerFooterBar);
