import React from 'react';
import tournamentRequests from '../../../helpers/data/tournamentRequests';
import './Tournament.scss';

class Tournament extends React.Component {
  state = {
    tournaments: [],
  }

  componentWillMount() {
    this.getWTATournaments();
  }

  getWTATournaments = () => {
    tournamentRequests.getWomenTournaments().then((data) => {
      this.setState({ tournaments: data });
    }).catch(err => console.error('error getting WTA tournaments on Tournament.js', err));
  }

  render() {
    return (
      <div className="Tournament">
        <h2>Tournament</h2>
      </div>
    );
  }
}

export default Tournament;
