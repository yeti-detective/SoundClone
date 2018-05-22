const emptyOb = (ob) => {
  if (ob) {
    if (Object.keys(ob).length === 0) {
      return true;
    } else {
      return false;
    }
  } else {
    return ob;
  }
};

export default emptyOb;
