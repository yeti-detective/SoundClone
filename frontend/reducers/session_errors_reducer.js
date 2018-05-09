import { RECEIVE_SESSION_ERRORS, RECEIVE_CURRENT_USER } from '../actions/session_actions';

const sessionErrorsReducer = (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      return { errors: action.errors };
    case RECEIVE_CURRENT_USER:
      return { errors: [] };
    default:
      return state;
  }
};

export default sessionErrorsReducer;
