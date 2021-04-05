import {
  ADD_EXPERIENCE,
  EDIT_EXPERIENCE,
  LOAD_USER_EXP_DETAILS,
} from "./types";
import { constant } from "../config.js";

const api = constant.endpoint;

export const addExperience = (post) => (dispatch) => {
  fetch(`${api}/experience/addUserExperience`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: ADD_EXPERIENCE, payload: data });
      localStorage.setItem("experienceInfoId", data._id);
    });
};
export const editExperience = (post) => (dispatch) => {
  fetch(`${api}/experience/editUserExperience`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: EDIT_EXPERIENCE, payload: data });
    });
};
export const loadUserExpDetails = () => (dispatch) => {
  console.log("siginin");
  fetch(`${api}/all/allInformation/${localStorage.getItem("CompanyId")}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`,
    },
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: LOAD_USER_EXP_DETAILS, payload: data });
    });
};
