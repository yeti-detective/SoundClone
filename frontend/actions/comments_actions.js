import * as CommentsAPI from '../util/comments_api_util';

export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS';

export const receiveComments = comments => ({
  type: RECEIVE_COMMENTS,
  comments
});

export const getComments = songId => dispatch => (
  CommentsAPI.getComments(songId)
    .then(comments => dispatch(receiveComments(comments)))
);
