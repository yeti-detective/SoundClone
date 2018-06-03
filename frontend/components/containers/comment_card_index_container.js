import { connect } from 'react-redux';

import listifySliceOfState from '../../util/listify_slice_of_state';

import CommentCardIndex from '../small_components/comment_card_index';

const mapStateToProps = ( state, ownProps ) => {
  const comments = listifySliceOfState(state.entities.comments);
  return ({
      comments: comments,
      users: state.entities.users
  });
};

export default connect(
  mapStateToProps,
  null
)(CommentCardIndex);
