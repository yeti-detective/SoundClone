import merge from 'lodash/merge';

import { RECEIVE_SONGS, RECEIVE_SONG } from '../actions/songs_actions';

const songsReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SONG:
      return merge({}, state, { [action.song.id]: song});
    case RECEIVE_SONGS:
      return merge({}, state, action.songs);
    default:
      return state;
  }
};

export default songsReducer;
