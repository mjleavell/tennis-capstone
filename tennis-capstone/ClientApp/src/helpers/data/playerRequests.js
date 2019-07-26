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

const updateFavoritePlayer = (playerId, isFavorite) => new Promise((resolve, reject) => {
  axios.put(`${apiUrl}/rankings/${playerId}`, isFavorite).then((result) => {
    resolve(result.data);
  })
    .catch((error) => {
      reject(error);
    });
});

export default {
  getWomenPlayers,
  updateFavoritePlayer,
};
