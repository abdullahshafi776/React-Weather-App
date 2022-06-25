import axios from "axios";
import {
  WEATHER_DATA_FAIL,
  WEATHER_DATA_REQUEST,
  WEATHER_DATA_SUCCESS,
} from "../Constants/weatherConstants";

export const fetchdata = (search) => async (dispatch) => {
  try {
    dispatch({ type: WEATHER_DATA_REQUEST });
    const { data } = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=e943d584c97cd5b76d739b4e724af3d0`
    );

    dispatch({
      type: WEATHER_DATA_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: WEATHER_DATA_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
