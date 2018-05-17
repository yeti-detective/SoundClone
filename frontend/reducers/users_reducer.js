import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { RECEIVE_USER, RECEIVE_USERS, REMOVE_USER } from '../actions/users_actions';
import { RECEIVE_SONG } from '../actions/songs_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, { [action.currentUser.id]: action.currentUser });
    case RECEIVE_USER:
      return merge({}, state, {[action.user.id]: action.user});
    case RECEIVE_USERS:
      return merge({}, state, action.users);
    case REMOVE_USER:
      newState = merge({}, state);
      delete newState[action.userId];
      return newState;
    case RECEIVE_SONG:
      return merge({}, state, action.user);
    default:
      return state;
  }
};

export default usersReducer;
