export const PLAYING = 'PLAYING';

export const isPlaying = () => {
  return {
    type: PLAYING
  }
}

export const togglePlaying = () => dispatch => {
  return dispatch(isPlaying());
}
