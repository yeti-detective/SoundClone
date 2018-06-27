import { connect } from 'react-redux';
import { getSong } from '../../actions/songs_actions';
import { getUser } from '../../actions/users_actions';
import { getComments } from '../../actions/comments_actions';
import SongShow from '../pages/song_show';

const mapStateToProps = (state, ownProps) => {
  return {
    thisSongId: ownProps.match.params.songId,
    songs: state.entities.songs || {},
    users: state.entities.users
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getSong: (id) => dispatch(getSong(id))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SongShow);
