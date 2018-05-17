import { connect } from 'react-redux';
import { getCurrentSong } from '../../actions/songs_actions';

import GetCurrentSongButton from '../small_components/get_current_song_button';

const mapDispatchToProps = dispatch => {
  return {
    getCurrentSong: (id) => dispatch(getCurrentSong(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(GetCurrentSongButton);
