/* eslint-disable prefer-destructuring */
import React from 'react';
import './TournamentProfile.scss';
import tournamentRequests from '../../../helpers/data/tournamentRequests';

class TournamentProfile extends React.Component {
  state = {
    tournamentProfile: [],
    tournamentFromDb: [],
  }

  componentWillMount() {
    this.getSingleTournament();
  }

  getSingleTournament = () => {
    const tournamentId = this.props.computedMatch.params.tournamentId;
    tournamentRequests.getSingleTournament(tournamentId).then((data) => {
      this.setState({ tournamentFromDb: data });
      this.getProfile(data.sportsradarId);
    }).catch(err => console.error('error getting single tournament', err));
  };

  getProfile = (sportsradarId) => {
    tournamentRequests.getTournamentProfile(sportsradarId).then((data) => {
      this.setState({ tournamentProfile: data });
    }).catch(err => console.error('error getting tournament profile', err));
  }

  render() {
    return (
      <div className="TournamentProfile">
        <h2>Tournament Profile</h2>
      </div>
    );
  }
}

export default TournamentProfile;
