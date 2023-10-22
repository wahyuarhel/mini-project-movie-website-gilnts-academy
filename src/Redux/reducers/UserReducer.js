import { SIGN_UP, SIGN_IN, SIGN_OUT, FAILED, GET_USER } from "../types/UserPage";

const initialState = {
  signUp: null,
  signIn: null,
  isAuthentificated: localStorage.getItem("token") ? true : false,
  token: "",
  user: [],
};

const userReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SIGN_UP:
      return {
        ...state,
        signUp: payload,
        isAuthentificated: true,
      };
    case SIGN_IN:
      return {
        ...state,
        signIn: payload,
        isAuthentificated: true,
      };
    case SIGN_OUT:
      return {
        ...state,
        token: undefined,
        isAuthentificated: false,
      };

    case FAILED:
      return {
        ...state,
        token: undefined,
        isAuthentificated: false,
      };

    case GET_USER:
      return {
        ...state,
        user: payload,
        isAuthentificated: true,
      };
    default:
      break;
  }
  return state;
};

export default userReducer;
