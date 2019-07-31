/* eslint-disable prefer-destructuring */
import React from 'react';
import playerRequests from '../../../helpers/data/playerRequests';
import './PlayerProfile.scss';

class PlayerProfile extends React.Component {
  state = {
    profile: {},
    playerFromDb: [],
  }

  componentDidMount() {
    this.getSinglePlayerRanking();
  }

  getSinglePlayerRanking = () => {
    const playerId = this.props.computedMatch.params.playerId;
    playerRequests.getSinglePlayer(playerId).then((data) => {
      this.setState({ playerFromDb: data });
      this.getProfile(data.sportsradarId);
    }).catch(err => console.error('error getting single player', err));
  }

  getProfile = (sportsradarId) => {
    playerRequests.getPlayerProfile(sportsradarId).then((data) => {
      this.setState({ profile: data });
    }).catch(err => console.error('error getting player profile from api', err));
  }

  render() {
    return (
      <div className="PlayerProfile">
        <h2>PlayerProfile</h2>
      </div>
    );
  }
}

export default PlayerProfile;
