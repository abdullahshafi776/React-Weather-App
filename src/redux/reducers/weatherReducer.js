import {
  WEATHER_DATA_FAIL,
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_SUCCESS,
} from "../Constants/weatherConstants";

const initialdata = {
  weather: [],
};
const weatherData = (state = {}, action) => {
  switch (action.type) {
    case WEATHER_DATA_REQUEST:
      return { loading: true };

    case WEATHER_DATA_SUCCESS:
      return { loading: false, success: true, weather: action.payload };

    case WEATHER_DATA_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export default weatherData;
