import { GET_COMMON, GET_COMMON_SUCCESS } from "../constants/actionTypes";
export const getCommon = payload => {
  return {
    type: GET_COMMON,
    payload
  };
};
export const getCommonSuccess = payload => {
  return {
    type: GET_COMMON_SUCCESS,
    payload
  };
};
