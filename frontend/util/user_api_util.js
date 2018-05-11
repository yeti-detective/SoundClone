export const getUsers = () => (
  $.ajax('/api/users')
);

export const getUser = id => (
  $.ajax(`/api/users/${id}`)
);
