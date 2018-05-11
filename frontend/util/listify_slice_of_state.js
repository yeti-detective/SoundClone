const listifySliceOfState = slice => (
  Object.keys(slice).map((id) => slice[id])
);

export default listifySliceOfState;
