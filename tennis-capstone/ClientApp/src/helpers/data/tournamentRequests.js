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

const getSingleTournament = tournamentId => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/tournaments/${tournamentId}`)
    .then((results) => {
      const tournament = results.data;
      resolve(tournament);
    })
    .catch((error) => {
      reject(error);
    });
});

const getTournamentProfile = sportsRadarId => new Promise((resolve, reject) => {
  axios.get(`${apiUrl}/tournaments/api/profile?sportsRadarId=${sportsRadarId}`).then((result) => {
    const profile = result.data;
    resolve(profile);
  })
    .catch((error) => {
      reject(error);
    });
});


export default {
  getWomenTournaments,
  updateFaveTournament,
  getSingleTournament,
  getTournamentProfile,
};
