import { ADD_BASIC_DETAIL, LOAD_USER_BASIC_DETAILS } from "../actions/types";

const initalState = {
  basicDetail: null,
};

export default function (state = initalState, action) {
  switch (action.type) {
    case ADD_BASIC_DETAIL:
      console.log("siginin");
      return {
        ...state,
        basicDetail: action.payload,
      };
    case LOAD_USER_BASIC_DETAILS:
      return {
        ...state,
        basicDetail: action.payload.details,
      };
    default:
      return state;
  }
}
