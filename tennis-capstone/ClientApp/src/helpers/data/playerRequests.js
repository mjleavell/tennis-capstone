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

const updateFavoritePlayer = (playerId, newIsFavorite) => axios.put(`${apiUrl}/rankings/${playerId}?newIsFavorite=${newIsFavorite}`);

const getPlayerProfile = sportsRadarId => new Promise((resolve, reject) => {
  axios.get(`https://api.sportradar.com/tennis-t2/en/players/${sportsRadarId}/profile.json?api_key=${apiKeys.tennisApi.sportsRadarKey}`)
    .then((result) => {
      const profile = result.data;
      resolve(profile);
    })
    .catch((error) => {
      reject(error);
    });
});

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


export default {
  getWomenPlayers,
  updateFavoritePlayer,
  getPlayerProfile,
  getSinglePlayer,
};
