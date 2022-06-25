import React, { useState, useEffect } from "react";
import background from "../../images/weather.jpg";
import { useDispatch, useSelector } from "react-redux";
import { fetchdata } from "../../redux/Actions/action";
export default function Weather() {
  const dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const { weather } = useSelector((state) => state.weatherData);

  useEffect(() => {
    dispatch(fetchdata(search));
  }, [search]);

  return (
    <div className="container-fluid pt-4">
      <div className="row">
        <div className="offset-lg-4 col-lg-4">
          <div
            className="weather"
            style={{ backgroundImage: `url(${background})` }}
          >
            <div className="pt-3">
              <input
                type="text"
                className="inp_feild form-control"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            <div className="pt-5">
              <div className="text-center">
                {weather ? (
                  <div>
                    <h1 className="pb-5">
                      <i className="text-white fas fa-globe-asia"></i> {search}
                    </h1>
                    <div className="pt-5">
                      <h2 className="pt-4">{weather.main.temp}℃</h2>
                      <p className="text-light">
                        Min: {weather.main.temp_min}℃ | Max:{" "}
                        {weather.main.temp_max}℃
                      </p>
                    </div>
                  </div>
                ) : (
                  <div>
                    <i className="text-white fas fa-globe-asia fa-3x pt-2"></i>
                    <p className="display-4">No Data Found</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
