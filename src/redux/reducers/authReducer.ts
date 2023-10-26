import { AuthState, loginSuccess, logoutSuccess } from '../slices/authSlice';

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case loginSuccess.type:
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case logoutSuccess.type:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
