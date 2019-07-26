import React from 'react';
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

  render() {
    const { players } = this.state;

    const rankingsTableBuilder = players.map(player => (
      <SinglePlayer
        key={player.playerId}
        player={player}
      />
      // <th scope="row">{player.ranking}</th>
      // <td>{player.name}</td>
      // <td>{player.points}</td>
      // <td></td>
    ));

    return (
      <div className="PlayerRankings">
        <h2>Player Rankings</h2>
        <Table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Name</th>
              <th>Points</th>
              <th>Nationality</th>
              <th>Tournaments Played</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* <tr> */}
              {rankingsTableBuilder}
            {/* </tr> */}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default PlayerRankings;
