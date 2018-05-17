import { RECEIVE_SONG } from '../actions/songs_actions';
import merge from 'lodash/merge';

const commentsReducer = ( state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SONG:
      return merge({}, state, action.comments);
    default:
      return state;
  }
};

export default commentsReducer;
