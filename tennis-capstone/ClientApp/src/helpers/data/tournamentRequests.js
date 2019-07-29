import axios from 'axios';
import apiKeys from '../apiKeys';

const apiUrl = apiKeys.tennisApi.apiBaseUrl;

const getWomenTournaments = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/tournaments/women`)
    .then((result) => {
      const womenTournaments = result.data;
      resolve(womenTournaments);
    })
    .catch((error) => {
      reject(error);
    });
});

// const updateFavoritePlayer = (playerId, newIsFavorite) => axios.put(`${apiUrl}/rankings/${playerId}?newIsFavorite=${newIsFavorite}`);

export default {
  getWomenTournaments,
};
