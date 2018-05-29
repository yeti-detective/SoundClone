import { connect } from 'react-redux';
import { getSong } from '../../actions/songs_actions';

import GetCurrentSongButton from '../small_components/get_song_button';

const mapDispatchToProps = dispatch => {
  return {
    getSong: (id) => dispatch(getSong(id))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(GetCurrentSongButton);
