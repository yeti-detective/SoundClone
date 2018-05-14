import { combineReducers } from 'redux';

import entitiesReducer from './entities_reducer';
import currentSongReducer from './current_song_reducer';
import sessionReducer from './session_reducer';
import errorsReducer from './errors_reducer';

const rootReducer = combineReducers({
  entities: entitiesReducer,
  session: sessionReducer,
  errors: errorsReducer,
  currentSong: currentSongReducer
});

export default rootReducer;
