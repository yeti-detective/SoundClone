export const getSongs = () => (
  $.ajax('/api/songs')
);

export const getSong = (id) => (
  $.ajax(`/api/songs/${id}`)
);


export const getUsersSongs = id => (
  $.ajax(`/api/users/${id}/songs`)
);
