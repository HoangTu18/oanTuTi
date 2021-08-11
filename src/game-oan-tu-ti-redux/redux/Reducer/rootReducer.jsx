import { combineReducers } from "redux";

import oanTuTiRedux from "../OanTuTiRedux";
// store Tổng ứng dụng
export const rootReducer = combineReducers({
  // nơi chứa các reducer cho nghiệp vụ (store con)
  oanTuTiRedux,
});

export default rootReducer;
