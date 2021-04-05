import {
  ADD_BASIC_DETAIL,
  LOAD_USER_BASIC_DETAILS,
  SIGN_IN,
  SIGN_UP,
} from "./types";
import { constant } from "../config.js";

const api = constant.endpoint;

export const signUp = (post) => (dispatch) => {
  fetch(`${api}/auth/signup`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: SIGN_UP, payload: data });
      localStorage.setItem("token", data.token);
      localStorage.setItem("CompanyId", data.CompanyId);
    });
};

export const signIn = (post) => (dispatch) => {
  fetch(`${api}/auth/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: SIGN_IN, payload: data });
      localStorage.setItem("token", data.token);
      localStorage.setItem("CompanyId", data.CompanyId);
    });
};

