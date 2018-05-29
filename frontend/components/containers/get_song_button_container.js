import { connect } from 'react-redux';
import { getSong, enqueueSong } from '../../actions/songs_actions';

import GetCurrentSongButton from '../small_components/get_song_button';

const mapStateToProps = state => {
  return {
    playQueue: state.playQueue,
    pointer: state.playQueuePointer,
    playing: state.playing
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSong: (id) => dispatch(getSong(id)),
    enqueueSong: (id) => dispatch(enqueueSong(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GetCurrentSongButton);
