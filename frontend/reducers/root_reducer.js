import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import playQueueReducer from './play_queue_reducer';
import playQueuePointerReducer from './player_queue_pointer_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';
import playingReducer from './playing_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  playQueue: playQueueReducer,
  playQueuePointer: playQueuePointerReducer,
  playing: playingReducer
});

export default rootReducer;
