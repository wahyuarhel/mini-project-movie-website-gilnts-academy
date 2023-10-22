import { SIGN_UP, SIGN_IN, SIGN_OUT, FAILED, GET_USER } from "../types/UserPage";
import axios from "axios";

const baseUrl = 'https://bbm-warehouse.herokuapp.com'

export const postSignUp = (body) => (dispatch) => {
  axios
    .post(`${baseUrl}/register`, { ...body })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: SIGN_UP,
          payload: response.data.data,
        });
        alert("Sign Up Success");
      }
    });
};

export const postSignIn = (body) => (dispatch) => {
  axios
    .post(`${baseUrl}/login`, { ...body })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: SIGN_IN,
          payload: response.data.message,
          token: localStorage.setItem("token", response.data.token),
        });
      }
    });
};

export const getUserDetail = (body, id) => (dispatch) => {
  axios
    .get(`${baseUrl}/users`, { ...body, id })
    .then((response) => {
      if (response.status === 200) {
        dispatch({
          type: GET_USER,
          payload: response.data.data,
        });
      }
    });
};

export const logout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: SIGN_OUT });
};

export const failed = () => (dispatch) => {
  dispatch({ type: FAILED });
  alert("The email address or password is incorrect.")
};
