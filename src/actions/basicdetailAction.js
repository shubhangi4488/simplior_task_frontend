import {
  ADD_BASIC_DETAIL,
  LOAD_USER_BASIC_DETAILS,
  LOAD_USER_EXP_DETAILS,
} from "./types";
import { constant } from "../config.js";
import { loadUserExpDetails } from "./experienceActions";

const api = constant.endpoint;

export const addBasicDetail = (post) => (dispatch) => {
  fetch(`${api}/userInfo/basicDetails`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((data) => {
      dispatch({ type: ADD_BASIC_DETAIL, payload: data });
      localStorage.setItem("userInfoId", data._id);
      console.log("addbasidetail", data);
      if(localStorage.getItem("userInfoId")===null){
        window.location.reload();
      }
    });
};
export const loadUserBasicDetails = () => (dispatch) => {
  console.log("siginin");
  console.log(localStorage.getItem("token"));
  if (localStorage.getItem("token")) {
    fetch(`${api}/all/allInformation/${localStorage.getItem("CompanyId")}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: LOAD_USER_BASIC_DETAILS, payload: data });
        if(data.details === "undefined"){
         console.log("user data details",data.details);
        }else{
          localStorage.setItem("userInfoId",data.details._id);
        }
      });
  }
};
