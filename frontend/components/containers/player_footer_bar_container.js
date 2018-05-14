import { connect } from 'react-redux';
import React from 'react'; // is this really needed here?
import { getSong } from '../../actions/songs_actions';

import PlayerFooterBar from '../small_components/player_footer_bar';

const mapDispatchToProps = dispatch => {
  return {
    getSong: () => dispatch(getSong)
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PlayerFooterBar);
