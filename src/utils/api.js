import 'isomorphic-fetch';
import config from '../config/config';

export function callEndpoint(endpoint) {
  const url = `${config.apiUrl}${endpoint}`;

  return fetch(url)
  .then(res => res.json())
  .catch(err => console.log(err));
}
