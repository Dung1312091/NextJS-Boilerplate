import { GET_COMMON_SUCCESS } from "../constants/actionTypes";

export const exampleInitialState = {
  commons: {}
};

const commonReducer = (state = exampleInitialState, action) => {
  switch (action.type) {
    case GET_COMMON_SUCCESS:
      return {
        ...state,
        commons: action.payload
      };
    default:
      return state;
  }
};

export default commonReducer;
