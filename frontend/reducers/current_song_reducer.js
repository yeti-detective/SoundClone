import { RECEIVE_CURRENT_SONG } from '../actions/songs_actions';

const currentSongReducer = (state = {}, action ) => {
  Object.freeze(state);
  switch(action.type) {
    case 'RECEIVE_CURRENT_SONG':
      return action.song[Object.keys(action.song)[0]];
    default:
      return state;
  }
};

export default currentSongReducer;
