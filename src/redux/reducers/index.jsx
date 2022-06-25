import weatherData from "./weatherReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  weatherData,
});

export default rootReducer;
