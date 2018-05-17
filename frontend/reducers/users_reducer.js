import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS, REMOVE_USER } from '../actions/users_actions';
import { RECEIVE_SONG, RECEIVE_BADGES } from '../actions/songs_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      return merge({}, state, {[action.user.user.id]: action.user.user});
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case RECEIVE_SONG:
      return merge({}, state, action.song.user);
    case RECEIVE_BADGES:
      return merge({}, state, action.payload.users);
    default:
      return state;
  }
};

export default usersReducer;
