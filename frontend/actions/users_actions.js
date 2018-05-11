import * as UserAPI from '../util/user_api_util';

export const RECEIVE_USERS = 'RECEIVE_USERS';
export const RECEIVE_USER = 'RECEIVE_USER';
export const REMOVE_USER = 'REMOVE_USER';

const receiveUsers = users => ({
  type: RECEIVE_USERS,
  users
});

const receiveUser = user => ({
  type: RECEIVE_USER,
  user
});

const removeUser = userId => ({
  type: REMOVE_USER,
  userId
});


export const getUsers = () => dispatch => {
  return (
    UserAPI.getUsers()
      .then((users) => dispatch(receiveUsers(users)))
  );
};

export const getUser = id => dispatch => {
  return (
    UserAPI.getUser(id)
      .then( user => dispatch(receiveUser(user)))
  );
};

export const removeUserFromState = userId => dispatch => {
  return (
    userId => dispatch(removeUser(userId))
  );
};
