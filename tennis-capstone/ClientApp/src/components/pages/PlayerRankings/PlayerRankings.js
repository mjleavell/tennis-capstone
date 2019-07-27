/* eslint-disable max-len */
import React from 'react';
import {
  MDBDataTable,
  MDBIcon,
} from 'mdbreact';
import playerRequests from '../../../helpers/data/playerRequests';
import './PlayerRankings.scss';

const columnsForTable = [
  {
    label: 'Rank',
    field: 'currentSinglesRanking',
    sort: 'asc',
  },
  {
    label: 'Name',
    field: 'name',
    sort: 'asc',
  },
  {
    label: 'Points',
    field: 'rankingPoints',
    sort: 'asc',
  },
  {
    label: 'Tournaments Played',
    field: 'tournamentsPlayed',
    sort: 'asc',
  },
  {
    label: 'Nationality',
    field: 'nationality',
    sort: 'asc',
  },
  {
    label: 'Favorite',
    field: 'isFavorite',
    sort: 'asc',
  },
];

const defaultData = {
  columns: columnsForTable,
  rows: [],
};

class PlayerRankings extends React.Component {
  state = {
    players: [],
    rows: [],
    data: defaultData,
  }

  componentWillMount() {
    this.getPlayers();
  }

  getPlayers = () => {
    playerRequests.getWomenPlayers().then((data) => {
      this.setState({ players: data });
      this.dataBuilder(data);
    }).catch(err => console.error('error getting women in PlayerRankings', err));
  }

  updateIsFavorite = (playerId, isFavorite) => {
    playerRequests.updateFavoritePlayer(playerId, isFavorite)
      .then(() => {
        this.getPlayers();
      })
      .catch(err => console.error('error. unable to mark player as favorite', err));
  }

  isFavorite = (e, playerId, oldIsfavorite) => {
    e.preventDefault();
    // eslint-disable-next-line no-unneeded-ternary
    const newIsFavorite = (oldIsfavorite === true) ? false : true;
    this.updateIsFavorite(playerId, newIsFavorite);
  };

  tableRowBuilder = (players) => {
    const tableRows = [];
    // eslint-disable-next-line array-callback-return
    players.map((player) => {
      const newPlayer = {
        currentSinglesRanking: player.currentSinglesRanking,
        name: player.name,
        rankingPoints: player.rankingPoints,
        tournamentsPlayed: player.tournamentsPlayed,
        nationality: player.nationality,
        isFavorite: (player.isFavorite === true) ? <MDBIcon icon="star" size="sm" className='btn table-btn' id={player.playerId} onClick={e => this.isFavorite(e, player.playerId, player.isFavorite)} /> : <MDBIcon far icon="star" size="sm" className='btn table-btn' id={player.playerId} onClick={e => this.isFavorite(e, player.playerId, player.isFavorite)} />,
      };
      tableRows.push(newPlayer);
    });
    this.setState({ rows: tableRows });
  };

  dataBuilder = (players) => {
    const tempData = { ...this.state.data };
    this.tableRowBuilder(players);
    tempData.rows = this.state.rows;
    this.setState({ data: tempData });
  }


  render() {
    const { data } = this.state;

    return (
      <div className="PlayerRankings">
        <h2>Player Rankings</h2>
        <MDBDataTable
          striped
          bordered
          small
          data={data}
        />
      </div>
    );
  }
}

export default PlayerRankings;
