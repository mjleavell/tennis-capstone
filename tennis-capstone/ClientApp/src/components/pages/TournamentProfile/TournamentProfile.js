/* eslint-disable eqeqeq */
/* eslint-disable consistent-return */
/* eslint-disable object-curly-newline */
/* eslint-disable prefer-destructuring */
import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Moment from 'react-moment';
import tournamentRequests from '../../../helpers/data/tournamentRequests';
import properties from '../../../helpers/tableProperties';
import './TournamentProfile.scss';

class TournamentProfile extends React.Component {
  state = {
    tournamentFromDb: [],
    tournamentProfile: [],
    tournament: [],
    season: [],
    info: [],
    coverageInfo: [],
    previousWinner: [],
    tournamentCompetitors: [],
    stages: [],
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
      this.setState({
        tournamentProfile: data,
        tournament: data.tournament,
        season: data.season,
        info: data.info,
        coverageInfo: data.covreage_info,
        previousWinner: data.winner_last_season,
        tournamentCompetitors: data.competitors,
        stages: data.stages,
      });
    }).catch(err => console.error('error getting tournament profile', err));
  }

  render() {
    const { tournament, season, info, previousWinner, tournamentFromDb } = this.state;

    const nullValue = tournamentValue => ((tournamentValue != null || tournamentValue != undefined) ? (tournamentValue) : 'N/A');

    const prevWinner = winner => ((winner != null || winner != undefined) ? (winner.name) : 'N/A');

    return (
      <div className="TournamentProfile">
        <Container className='pt-5'>
          <Row>
            <Col sm="7"><h3>{season.name}</h3></Col>
          </Row>
          <Row>
            <Col sm="3">Tournament Type:</Col>
            <Col sm="4">{tournamentFromDb.categoryName}</Col>
          </Row>
          <Row>
            <Col sm="3">Tournament Level:</Col>
            <Col sm="4" style={{ textTransform: 'capitalize' }}>{properties.splitString(tournamentFromDb.level)}</Col>
          </Row>
          <Row>
            <Col sm="3">Date:</Col>
            <Col sm="4"><Moment format="MMM D, YYYY">{season.start_Date}</Moment> - <Moment format="MMM D, YYYY">{season.end_Date}</Moment></Col>
          </Row>
          <Row>
            <Col sm="3">Surface:</Col>
            <Col sm="4" style={{ textTransform: 'capitalize' }}>{nullValue(info.surface)}</Col>
          </Row>
          <Row>
            <Col sm="3">Prize Money:</Col>
            <Col sm="4">{info.prize_Currency} {properties.convertStringToNumber(info.prize_Money)}</Col>
          </Row>
          <Row>
            <Col sm="3">Type:</Col>
            <Col sm="4" style={{ textTransform: 'capitalize' }}>{tournament.type}</Col>
          </Row>
          <Row>
            <Col sm="3">Previous Winner:</Col>
            <Col sm="4">{prevWinner(previousWinner)}</Col>
          </Row>
          <Row>
            <Col sm="3">Main Draw Competitors:</Col>
            <Col sm="4">{info.number_Of_Competitors}</Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default TournamentProfile;
