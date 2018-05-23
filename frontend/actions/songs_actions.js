import * as SongsAPI from '../util/songs_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';
export const RECEIVE_CURRENT_SONG = 'RECEIVE_CURRENT_SONG';
export const REMOVE_SONG_FROM_QUEUE = 'REMOVE_SONG_FROM_QUEUE';
export const CLEAR_SONG_QUEUE = 'CLEAR_SONG_QUEUE';
export const RECEIVE_BADGES = 'RECEIVE_BADGES';

const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

const receiveCurrentSong = song => ({
  type: RECEIVE_CURRENT_SONG,
  song
});

const getBadges = payload => ({
  type: RECEIVE_BADGES,
  payload
});

const removeSong = id => ({
  type: REMOVE_SONG_FROM_QUEUE,
  id
})

const clearQueue = () => ({
  type: CLEAR_SONG_QUEUE
})

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

export const getSongBadges = () => dispatch => {
  return (
    SongsAPI.getSongBadges()
      .then((payload) => dispatch(getBadges(payload)))
  );
};

export const removeSongFromQueue = () => dispatch => {
  return (id) => dispatch(removeSong(id))
}

export const clearSongQueue = () => dispatch => {
  return () => dispatch(clearQueue())
}
