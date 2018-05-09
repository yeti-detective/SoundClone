export const signup = (user) => {
  $.ajax({
    url: '/api/users',
    method: 'post',
    data: {user: user}
  });
};

export const login = (user) => {
  // debugger
  $.ajax({
    url: 'api/sessions',
    method: 'post',
    data: {user: user}
  });
};

export const logout = () => {
  $.ajax({
    url: 'api/sessions',
    method: 'delete'
  });
};
