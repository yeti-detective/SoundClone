import * as SongsAPI from '../util/songs_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';

const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

const receiveSong = payload => ({
  type: RECEIVE_SONG,
  payload
});

const receiveCurrentSong = payload => ({
  type: RECEIVE_CURRENT_SONG,
  payload
});

export const getSong = id => dispatch => {
  return (
    SongsAPI.getSong(id)
      .then((song) => dispatch(receiveSong(song)))
  );
};

export const getCurrentSong = id => dispatch => {
  return (
    SongsAPI.getSong(id)
      .then((song) => dispatch(receiveCurrentSong(song)))
  );
};

export const getSongs = () => dispatch => {
  return (
    SongsAPI.getSongs()
      .then((songs) => dispatch(receiveSongs(songs)))
  );
};

export const getUsersSongs = (userId) => dispatch => {
  return (
    SongsAPI.getUsersSongs(userId)
      .then((songs) => dispatch(receiveSongs(songs)))
  );
};
