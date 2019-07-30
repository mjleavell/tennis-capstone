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

const updateFaveTournament = (tournamentId, isFavorite) => axios.put(`${apiUrl}/tournaments/${tournamentId}?isFavorite=${isFavorite}`);

export default {
  getWomenTournaments,
  updateFaveTournament,
};
