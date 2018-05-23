export const INCREMENT_POINTER = 'INCREMENT_POINTER';
export const DECREMENT_POINTER = 'DECREMENT_POINTER';

const incrementSongPointer = () => ({
  type: INCREMENT_POINTER
});

const decrementSongPointer = () => ({
  type: DECREMENT_POINTER
});

export const incrementPointer = () => dispatch => {
  return () => dispatch(incrementSongPointer());
};


export const decrementPointer = () => dispatch => {
  return () => dispatch(decrementSongPointer());
};
