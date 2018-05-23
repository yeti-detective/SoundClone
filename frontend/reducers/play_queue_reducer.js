import { RECEIVE_CURRENT_SONG } from '../actions/songs_actions';

const playQueueReducer = (state = [], action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_SONG:
      const newState = Object.assign([], state, [action.song.id])
      return newState;
    default:
      return state;
  }
}

export default playQueueReducer;
