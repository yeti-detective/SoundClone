import merge from 'lodash/merge';

import { RECEIVE_SONGS, RECEIVE_SONG } from '../actions/songs_actions';
import { RECEIVE_USER } from '../actions/users_actions';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SONG:
      let newState = merge({}, action.song.song, action.song.songs);
      return merge({}, state, newState);
    case RECEIVE_SONGS:
      return merge({}, state, action.songs);
    case RECEIVE_USER:
      return merge({}, state, action.songs);
    default:
      return state;
  }
};

export default songsReducer;
