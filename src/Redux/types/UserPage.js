export const SIGN_UP = "SIGN_UP";
export const SIGN_IN = "SIGN_IN";
export const SIGN_OUT = "SIGN_OUT";
export const FAILED = "FAILED"
export const GET_USER = "GET_USER"

export const signUp = () => {
  return {
    type: SIGN_UP,
  };
};

export const signIn = () => {
  return {
    type: SIGN_IN,
  };
};

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const getUser = () => {
  return {
    type: GET_USER,
  };
};
