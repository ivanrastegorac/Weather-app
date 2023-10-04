interface AuthState {
  isAuthenticated: boolean;
  user: { email: string } | null;
}

const initialState: AuthState = {
  isAuthenticated: false,
  user: null,
};

const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload,
      };
    case 'LOGOUT_SUCCESS':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default authReducer;
