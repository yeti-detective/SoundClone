import {
  ENQUEUE_SONG,
  REMOVE_SONG_FROM_QUEUE,
  CLEAR_SONG_QUEUE
} from '../actions/songs_actions';

const playQueueReducer = (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case ENQUEUE_SONG:
      const newState = Object.assign([], state);
      newState.push(action.id);
      return newState;
    case REMOVE_SONG_FROM_QUEUE:
      let remState = Object.assign([], state);
      const idx = remState.indexOf(String(action.id));
      remState = remState
        .slice(0, idx)
        .concat(remState.slice(idx + 1, remState.length));
      return remState;
    case CLEAR_SONG_QUEUE:
      return [];
    default:
      return state;
  }
};

export default playQueueReducer;
