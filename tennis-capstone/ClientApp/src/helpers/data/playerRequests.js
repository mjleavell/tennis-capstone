import axios from 'axios';
import apiKeys from '../apiKeys';

const apiUrl = apiKeys.tennisApi.apiBaseUrl;

const getWomenPlayers = () => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/rankings`)
    .then((result) => {
      console.log(result);
      const rankings = result.data;
      resolve(rankings);
    })
    .catch((error) => {
      reject(error);
    });
});

export default {
  getWomenPlayers,
};
