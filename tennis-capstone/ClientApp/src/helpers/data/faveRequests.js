import axios from 'axios';
import apiKeys from '../apiKeys';

const apiUrl = apiKeys.tennisApi.apiBaseUrl;

const getFaveTournaments = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/favorites/tournaments`)
    .then((result) => {
      const womenTournaments = result.data;
      resolve(womenTournaments);
    })
    .catch((error) => {
      reject(error);
    });
});

const getFavePlayers = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/favorites/players`)
    .then((result) => {
      const womenTournaments = result.data;
      resolve(womenTournaments);
    })
    .catch((error) => {
      reject(error);
    });
});

export default {
  getFaveTournaments,
  getFavePlayers,
};
