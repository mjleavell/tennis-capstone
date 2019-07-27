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

// const updateFavoritePlayer = (playerId, newIsFavorite) => new Promise((resolve, reject) => {
//   axios.put(`${apiUrl}/rankings/${playerId}`, { newIsFavorite }).then((result) => {
//     console.log(result.data);
//     resolve(result.data);
//   })
//     .catch((error) => {
//       reject(error);
//     });
// });
const updateFavoritePlayer = (playerId, newIsFavorite) => axios.put(`${apiUrl}/rankings/${playerId}?newIsFavorite=${newIsFavorite}`);

export default {
  getWomenPlayers,
  updateFavoritePlayer,
};
