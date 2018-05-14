import { RECEIVE_SONG } from '../actions/songs_actions';

const currentSongReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_SONG:
      return action.payload.song[Object.keys(action.payload.song)[0]];
    default:
      return state;
  }
};

export default currentSongReducer;
