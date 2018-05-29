import { connect } from 'react-redux';
import { getUser } from '../../actions/users_actions';
import {
  getSong,
  removeSongFromQueue,
  clearSongQueue
} from '../../actions/songs_actions';
import {
  incrementPointer,
  decrementPointer
} from '../../actions/pointer_actions';

import PlayerFooterBar from '../small_components/player_footer_bar';

const mapStateToProps = state => {
  return {
    songs: state.entities.songs,
    users: state.entities.users,
    playQueue: state.playQueue,
    pointer: state.playQueuePointer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getSong: () => dispatch(getSong),
    getUser: () => dispatch(getUser),
    nextSong: () => dispatch(incrementPointer()),
    previousSong: () => dispatch(decrementPointer())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerFooterBar);
