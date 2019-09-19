const API_URL = 'https://data.cityofchicago.org/resource/k737-xg34.json';

export default function getStreetSweepingSchedule(query) {
  return fetch(`${API_URL}?${query}`).then(resp => resp.json());
}
