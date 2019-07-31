/* eslint-disable array-callback-return */
/* eslint-disable max-len */
import React from 'react';
import {
  MDBDataTable,
  MDBIcon,
} from 'mdbreact';
import Moment from 'react-moment';
import faveRequests from '../../../helpers/data/faveRequests';
import playerRequests from '../../../helpers/data/playerRequests';
import tournamentRequests from '../../../helpers/data/tournamentRequests';
import tableProperties from '../../../helpers/tableProperties';
import './Favorites.scss';

class Favorites extends React.Component {
  state = {
    tournaments: [],
    trows: [],
    tdata: tableProperties.defaultTournamentData,
    players: [],
    prows: [],
    pdata: tableProperties.defaultPlayerData,
  }

  componentWillMount() {
    this.getFaveTournaments();
    this.getFavePlayers();
  }

  getFaveTournaments = () => {
    faveRequests.getFaveTournaments().then((data) => {
      this.setState({ tournaments: data });
      this.tdataBuilder(data);
    }).catch(err => console.error('error getting WTA tournaments on Tournament.js', err));
  }

  getFavePlayers = () => {
    faveRequests.getFavePlayers().then((data) => {
      this.setState({ players: data });
      this.pdataBuilder(data);
    }).catch(err => console.error('error getting women in PlayerRankings', err));
  }

  ttableRowBuilder = (tournaments) => {
    const tableRows = [];
    tournaments.map((tournament) => {
      const newTournament = {
        year: Number(tournament.year),
        name: tournament.name,
        startDate: <Moment format="MM/DD/YYYY">{tournament.startDate}</Moment>,
        endDate: <Moment format="MM/DD/YYYY">{tournament.endDate}</Moment>,
        level: tournament.level,
        type: tournament.type,
        isFavorite: (tournament.isFavorite === true) ? <MDBIcon icon="star" size="sm" className='btn table-btn' id={tournament.tournamentId} onClick={e => this.tisFavorite(e, tournament.tournamentId, tournament.isFavorite)} /> : <MDBIcon far icon="star" size="sm" className='btn table-btn' id={tournament.tournamentId} onClick={e => this.isFavorite(e, tournament.tournamentId, tournament.isFavorite)} />,
      };
      tableRows.push(newTournament);
    });
    this.setState({ trows: tableRows });
  };

  tdataBuilder = (tournaments) => {
    const tempData = { ...this.state.tdata };
    this.ttableRowBuilder(tournaments);
    tempData.rows = this.state.trows;
    this.setState({ tdata: tempData });
  }

  tupdateIsFavorite = (tournamentId, isFavorite) => {
    tournamentRequests.updateFaveTournament(tournamentId, isFavorite)
      .then(() => {
        this.getFaveTournaments();
      })
      .catch(err => console.error('error. unable to mark tournament as favorite', err));
  }

  tisFavorite = (e, tournamentId, oldIsfavorite) => {
    e.preventDefault();
    // eslint-disable-next-line no-unneeded-ternary
    const newIsFavorite = (oldIsfavorite === true) ? false : true;
    this.tupdateIsFavorite(tournamentId, newIsFavorite);
  };

  pupdateIsFavorite = (playerId, isFavorite) => {
    playerRequests.updateFavoritePlayer(playerId, isFavorite)
      .then(() => {
        this.getFavePlayers();
      })
      .catch(err => console.error('error. unable to mark player as favorite', err));
  }

  pisFavorite = (e, playerId, oldIsfavorite) => {
    e.preventDefault();
    // eslint-disable-next-line no-unneeded-ternary
    const newIsFavorite = (oldIsfavorite === true) ? false : true;
    this.pupdateIsFavorite(playerId, newIsFavorite);
  };

  ptableRowBuilder = (players) => {
    const tableRows = [];
    // eslint-disable-next-line array-callback-return
    players.map((player) => {
      const newPlayer = {
        currentSinglesRanking: player.currentSinglesRanking,
        name: player.name,
        rankingPoints: player.rankingPoints,
        tournamentsPlayed: player.tournamentsPlayed,
        nationality: player.nationality,
        isFavorite: (player.isFavorite === true) ? <MDBIcon icon="star" size="sm" className='btn table-btn' id={player.playerId} onClick={e => this.pisFavorite(e, player.playerId, player.isFavorite)} /> : <MDBIcon far icon="star" size="sm" className='btn table-btn' id={player.playerId} onClick={e => this.isFavorite(e, player.playerId, player.isFavorite)} />,
      };
      tableRows.push(newPlayer);
    });
    this.setState({ prows: tableRows });
  };

  pdataBuilder = (players) => {
    const tempData = { ...this.state.pdata };
    this.ptableRowBuilder(players);
    tempData.rows = this.state.prows;
    this.setState({ pdata: tempData });
  }

  render() {
    const { tdata, pdata } = this.state;

    return (
      <div className="Favorites">
        <h2 className='mx-auto'>Favorite Players</h2>
        <MDBDataTable
          striped
          bordered
          small
          data={pdata}
        />
        <h2 className='mx-auto'>Favorite Tournaments</h2>
        <MDBDataTable
          striped
          bordered
          small
          order={['year', 'asc']}
          data={tdata}
        />
      </div>
    );
  }
}

export default Favorites;
