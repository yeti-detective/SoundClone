import {
  INCREMENT_POINTER,
  DECREMENT_POINTER
 } from '../actions/pointer_actions';
 import { CLEAR_SONG_QUEUE } from '../actions/songs_actions';

const playQueuePointerReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT_POINTER:
      const incState = state + 1;
      return incState;
    case DECREMENT_POINTER:
      const decState = state - 1;
      return decState;
    default:
      return state;
  }
}

export default playQueuePointerReducer;
