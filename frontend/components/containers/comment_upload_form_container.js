import { connect } from 'react-redux';
import { getComments } from '../../actions/comments_actions';
import CommentUploadForm from '../small_components/comment_upload_form';

const mapStateToProps = state => ({
  loggedIn: Boolean(state.session.id)
});


const mapDispatchToProps = dispatch => ({
  getComments: (songId) => dispatch(getComments(songId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentUploadForm);
