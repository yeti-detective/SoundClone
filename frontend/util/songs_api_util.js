export const getSongs = () => (
  $.ajax('/api/songs')
);

export const getSong = (id) => (
  $.ajax(`/api/songs/${id}`)
);
