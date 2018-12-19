export let urlBuilder = (url, city, country, units, key) => {
    let safeCity = encodeURI(city);
    let safeCountry = encodeURI(country);
    let fullURL = `${url} ?q= ${safeCity}, ${safeCountry} & units= ${units} & ${key}`.replace(/\s/g, '');
    return fullURL;
};
export const apiKey = 'appid=7b74044f257192db0e510ee45df33d0b';