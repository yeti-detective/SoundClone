const emptyOb = (ob) => {
  if (Object.keys(ob).length === 0) {
    return true;
  } else {
    return false;
  }
};

export default emptyOb;
