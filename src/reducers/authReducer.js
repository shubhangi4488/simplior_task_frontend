import { SIGN_UP, SIGN_IN, LOAD_USER_BASIC_DETAILS } from "../actions/types";

const initalState = {
  isAuthenticated: false,
  token: localStorage.getItem("token"),
  companyInfo: null,
  CompanyId: localStorage.getItem("CompanyId"),
  userInfoId: localStorage.getItem("userInfoId"),
};

export default function (state = initalState, action) {
  switch (action.type) {
    case SIGN_IN:
      console.log("siginin");
      return {
        ...state,
        isAuthenticated: true,
        companyInfo: action.payload,
        token: action.payload.token,
        CompanyId: action.payload.CompanyId,
        
      };
    case SIGN_UP:
      console.log("signup");
      return {
        ...state,
        isAuthenticated: true,
        companyInfo: action.payload,
        token: action.payload.token,
        CompanyId: action.payload.CompanyId,
       
      };
     
    default:
      return state;
  }
}
