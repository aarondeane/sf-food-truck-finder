import API_KEY from '../API-key'

module.exports = (day) => {
  const url = new URL('https://data.sfgov.org/resource/jjew-r69b.json'),
    params = {
      '$$app_token' : `${API_KEY}`,
      '$select' : 'dayorder, applicant, location, starttime, endtime',
      '$where': `dayorder = ${day}`,
      '$order': 'applicant'}
  Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  fetch(url)
    .then(response => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((error) => {
      return error;
    })
}