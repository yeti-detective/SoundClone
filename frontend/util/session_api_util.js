export const signup = (user) => {
  $.ajax({
    url: '/api/sessions',
    method: 'post',
    data: user
  });
};
