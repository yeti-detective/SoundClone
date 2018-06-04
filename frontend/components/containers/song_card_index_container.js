import { connect } from 'react-redux';
import { getSong } from '../../actions/songs_actions';
import SongCardIndex from '../small_components/song_card_index';

const mapDispatchToProps = dispatch => ({
  getSong: (id) => dispatch(getSong(id))
});

export default connect(
  null,
  mapDispatchToProps
)(SongCardIndex);
