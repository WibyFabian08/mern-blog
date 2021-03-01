import { combineReducers } from "redux";
import dataBlogReducer from './homeReducer';
import createBlogReducer from './createBlogReducer';

const reducer = combineReducers({
  dataBlogReducer,
  createBlogReducer
});

export default reducer;
