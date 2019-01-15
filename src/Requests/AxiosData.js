import axios from "axios";
import { fakeWeatherData } from "./weatherData";
import { fakeMoiveDatabySearch, fakeMoiveDatabyID } from "./movieData";

export let axiosGetWeather = {
  GET: function(url) {
    return axios
      .get(url)
      .then(function(response) {
        // handle success
        //then maybe return response.data?
        let testa = fakeWeatherData;
        return testa;
      })
      .catch(function(error) {
        // handle error
        return error;
      });
  }
};
