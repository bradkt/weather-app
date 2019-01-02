import { fakeWeatherData } from "./weatherData";
import { fakeMoiveDatabySearch, fakeMoiveDatabyID } from "./movieData";

export default {
  GET: function(url) {
    return fetch(url)
      .then(request => {
        if (request.ok) {
          return request.json();
        }
        throw new Error("Network response was not ok.");
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};

export let MockWeatherData = {
  GET: function(url) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(fakeWeatherData);
      }, 190);
    });
  }
};

export let MockMovieData = {
  GET: function(url) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(fakeMoiveDatabySearch);
      }, 190);
    });
  }
};

export let MockMovieDetails = {
  GET: function(url) {
    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve(fakeMoiveDatabyID);
      }, 190);
    });
  }
};
