import axios from 'axios';
import apiKeys from '../apiKeys';

const apiUrl = apiKeys.tennisApi.apiBaseUrl;

const getWomenPlayers = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/rankings`)
    .then((result) => {
      const rankings = result.data;
      resolve(rankings);
    })
    .catch((error) => {
      reject(error);
    });
});

const updateFavoritePlayer = (playerId, newIsFavorite) => axios.put(`${apiUrl}/rankings/${playerId}`);

const getSinglePlayer = playerId => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/players/${playerId}`)
    .then((results) => {
      const player = results.data;
      resolve(player);
    })
    .catch((error) => {
      reject(error);
    });
});

const getPlayerProfile = sportsRadarId => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/players/api?sportsRadarId=${sportsRadarId}`).then((result) => {
    const profile = result.data;
    resolve(profile);
  })
    .catch((error) => {
      reject(error);
    });
});

export default {
  getWomenPlayers,
  updateFavoritePlayer,
  getPlayerProfile,
  getSinglePlayer,
};
