export const loginAction = (userCredentials: {
  email: string;
  password: string;
}) => ({
  type: 'LOGIN_SUCCESS',
  payload: userCredentials,
});

export const logoutAction = () => ({
  type: 'LOGOUT_SUCCESS',
});
