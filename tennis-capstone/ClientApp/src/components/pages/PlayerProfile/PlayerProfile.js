/* eslint-disable consistent-return */
/* eslint-disable object-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
import React from 'react';
import Moment from 'react-moment';
import { Container, Row, Col } from 'reactstrap';
import PlayerGraph from '../../PlayerGraph/PlayerGraph';
import playerRequests from '../../../helpers/data/playerRequests';
import './PlayerProfile.scss';

class PlayerProfile extends React.Component {
  state = {
    profile: [],
    playerFromDb: [],
    rankings: [],
    tournaments: [],
    player: [],
    statistics: [],
    stats: [],
  }

  componentWillMount() {
    this.getSinglePlayerRanking();
  }

  getData = () => {
    const playerStats = [];
    // eslint-disable-next-line array-callback-return
    this.state.statistics.map((statsPerYear) => {
      const yearlyStats = {
        year: statsPerYear.year,
        matchesPlayed: statsPerYear.statistics.matches_played,
        matchesWon: statsPerYear.statistics.matches_won,
        tournamentsPlayed: statsPerYear.statistics.tournaments_played,
        tournamentsWon: statsPerYear.statistics.tournaments_won,
      };
      playerStats.unshift(yearlyStats);
    });
    this.setState({ stats: playerStats });
  };

  getSinglePlayerRanking = () => {
    const playerId = this.props.computedMatch.params.playerId;
    playerRequests.getSinglePlayer(playerId).then((data) => {
      this.setState({
        playerFromDb: data,
      });
      this.getProfile(data.sportsradarId);
    }).catch(err => console.error('error getting single player', err));
  }

  getProfile = (sportsradarId) => {
    playerRequests.getPlayerProfile(sportsradarId).then((data) => {
      this.setState({
        profile: data,
        player: data.player,
        rankings: data.rankings,
        statistics: data.statistics.periods,
        tournaments: data.tournaments_played,
      });
      this.getData();
    }).catch(err => console.error('error getting player profile from api', err));
  }

  render() {
    const { player, tournaments, stats } = this.state;

    const heightToInches = (playerHeight) => {
      const inches = Number(playerHeight) / 2.54;
      const decimalHeight = inches.toFixed(0);
      return decimalHeight;
    };

    const DOB = (birthday) => {
      if (birthday !== undefined) {
        return new Date(birthday).toISOString();
      }
    };

    const playerWeight = (weight) => {
      const weightInLbs = weight * 2.205;
      return weightInLbs.toFixed(0);
    };

    const getAge = (birthdate) => {
      const bdayFormat = DOB(birthdate);
      const bday = Math.floor((new Date() - new Date(bdayFormat).getTime()) / 3.15576e+10);
      return bday.toString();
    };

    return (
      <div className="PlayerProfile container">
        <Container className='pt-5 profile'>
          <Row>
            <Col sm="7"><h3>{player.name}</h3></Col>
          </Row>
          <Row>
            <Col sm="3">Nationality:</Col>
            <Col sm="4">{player.country_Code}</Col>
          </Row>
          <Row>
            <Col sm="3">Age:</Col>
            <Col sm="4">{getAge(player.date_Of_Birth)}</Col>
          </Row>
          <Row>
            <Col sm="3">Birthdate:</Col>
            <Col sm="4"><Moment format="MMM DD, YYYY">{DOB(player.date_Of_Birth)}</Moment></Col>
          </Row>
          <Row>
            <Col sm="3">Plays:</Col>
            <Col sm="4" style={{ textTransform: 'capitalize' }}>{player.handedness}-Handed</Col>
          </Row>
          <Row>
            <Col sm="3">Pro Status:</Col>
            <Col sm="4">{player.pro_Year}</Col>
          </Row>
          <Row>
            <Col sm="3">Height:</Col>
            <Col sm="4">{heightToInches(player.height)} in.</Col>
          </Row>
          <Row>
            <Col sm="3">Weight:</Col>
            <Col sm="4">{playerWeight(player.weight)} lbs.</Col>
          </Row>
          <Row>
            <Col sm="3">Career High Singles Ranking:</Col>
            <Col sm="4">{player.highest_Singles_Ranking}</Col>
          </Row>
          <Row>
            <Col sm="3">Career High Doubles Ranking:</Col>
            <Col sm="4">{player.highest_Doubles_Ranking}</Col>
          </Row>
          <Row>
            <Col sm="3">Tournaments Played:</Col>
            <Col sm="4">{tournaments.length}</Col>
          </Row>
        </Container>
        <PlayerGraph stats={stats} />
      </div>
    );
  }
}

export default PlayerProfile;
