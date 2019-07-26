import React from 'react';
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
      console.log(data);
      this.setState({ players: data });
    }).catch(err => console.error('error getting women in PlayerRankings', err));
  }

  render() {
    return (
      <div className="PlayerRankings">
        <h2>Player Rankings</h2>
      </div>
    );
  }
}

export default PlayerRankings;
