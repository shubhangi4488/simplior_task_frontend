import {
  ADD_EXPERIENCE,
  LOAD_USER_EXP_DETAILS,
  EDIT_EXPERIENCE,
} from "../actions/types";

const initalState = {
  experienceDetail: [],
};

export default function (state = initalState, action) {
  switch (action.type) {
    case ADD_EXPERIENCE:
      console.log("siginin");
      return {
        ...state,
        experienceDetail: action.payload,
      };
    case EDIT_EXPERIENCE:
      return {
        ...state,
        experienceDetail: action.payload,
      };
    case LOAD_USER_EXP_DETAILS:
      return {
        ...state,
        experienceDetail: action.payload.experience,
      };
    default:
      return state;
  }
}
