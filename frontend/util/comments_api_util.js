export const getComments = songId => (
  $.ajax(`/api/songs/${songId}/comments`)
);
