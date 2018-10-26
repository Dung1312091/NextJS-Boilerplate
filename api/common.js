import caller from "./apiCaller";
export const getCommon = param => {
  return caller.get("/commons", param);
};
