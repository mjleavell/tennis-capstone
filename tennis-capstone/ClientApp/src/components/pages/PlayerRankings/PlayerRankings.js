import React from 'react';
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import { Table } from 'reactstrap';
import SinglePlayer from '../../SinglePlayer/SinglePlayer';
import playerRequests from '../../../helpers/data/playerRequests';
import './PlayerRankings.scss';

class PlayerRankings extends React.Component {
  state = {
    players: [],
  }

  componentWillMount() {
    this.getPlayers();
  }

  getPlayers = () => {
    playerRequests.getWomenPlayers().then((data) => {
      this.setState({ players: data });
    }).catch(err => console.error('error getting women in PlayerRankings', err));
  }

  updateIsFavorite = (playerId, isFavorite) => {
    playerRequests.updateFavoritePlayer(playerId, isFavorite)
      .then(() => {
        this.getPlayers();
      })
      .catch(err => console.error('error. unable to mark player as favorite', err));
  }


  render() {
    const { players } = this.state;

    const rankingsTableBuilder = players.map(player => (
      <SinglePlayer
        key={player.playerId}
        player={player}
        updateIsFavorite={this.updateIsFavorite}
      />
    ));

    // const selectRow = {
    //   mode: 'checkbox',
    // };

    return (
      <div className="PlayerRankings">
        <h2>Player Rankings</h2>
        <Table className='table-hover' data-toggle='table' data-sort-order="desc">
          <thead>
            <tr>
              <th data-field='ranking' data-sortable='true'>Rank</th>
              <th data-field="name" data-sortable="true">Name</th>
              <th data-field="points" data-sortable="true">Points</th>
              <th data-field="nationality" data-sortable="true">Nationality</th>
              <th data-field="tournamentsPlayed" data-sortable="true">Tournaments Played</th>
              <th data-field="favorite" data-sortable="true"></th>
            </tr>
          </thead>
          <tbody>
            {rankingsTableBuilder}
          </tbody>
        </Table>


        {/* <BootstrapTable ref='table' version='4' data={players} pagination>
          <TableHeaderColumn dataField='currentSinglesRanking' isKey={true} dataSort>Ranking</TableHeaderColumn>
          <TableHeaderColumn dataField='name' dataSort>Name</TableHeaderColumn>
          <TableHeaderColumn dataField='rankingPoints' dataSort>Points</TableHeaderColumn>
          <TableHeaderColumn dataField='tournamentsPlayed' dataSort>Tournaments Played</TableHeaderColumn>
          <TableHeaderColumn dataField='nationality' dataSort>Nationality</TableHeaderColumn>
          <TableHeaderColumn selectRow={selectRow} dataField='isFavorite' dataSort>Favorite</TableHeaderColumn>
        </BootstrapTable> */}
      </div>
    );
  }
}

export default PlayerRankings;
