import * as SongsAPI from '../util/songs_api_util';

export const RECEIVE_SONGS = 'RECEIVE_SONGS';
export const RECEIVE_SONG = 'RECEIVE_SONG';

const receiveSongs = songs => ({
  type: RECEIVE_SONGS,
  songs
});

const receiveSong = song => ({
  type: RECEIVE_SONG,
  song
});

export const getSong = id => dispatch => {
  return (
    SongsAPI.getSong(id)
      .then((song) => dispatch(receiveSong(song)))
  );
};

export const getSongs = () => dispatch => {
  return (
    SongsAPI.getSongs()
      .then((songs) => dispatch(receiveSongs(songs)))
  );
};
