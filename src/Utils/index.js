export let weatherURLBuilder = (url, city, country, units, key) => {
  let safeCity = encodeURI(city);
  let safeCountry = encodeURI(country);
  let fullURL = `${url} ?q= ${safeCity}, ${safeCountry} & units= ${units} & ${key}`.replace(
    /\s/g,
    ""
  );
  return fullURL;
};

//api_key=6f3a1bef2816aa6352efacdebf1b4ac5&query=back+to+the+future
export let movieSearchURLBuilder = (url, movieName, key) => {
  let safeMovieName = movieName.split(" ").join("+");
  let fullURL = `${url} ${key} &query= ${safeMovieName}`.replace(/\s/g, "");
  return fullURL;
};

//550?api_key=6f3a1bef2816aa6352efacdebf1b4ac5
export let movieURLBuilder = (url, movieID, key) => {
  let fullURL = `${url} ${movieID} ? ${key}`.replace(/\s/g, "");
  return fullURL;
};
