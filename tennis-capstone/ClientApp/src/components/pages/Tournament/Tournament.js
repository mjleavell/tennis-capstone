/* eslint-disable array-callback-return */
/* eslint-disable max-len */
import React from 'react';
import {
  MDBDataTable,
  MDBIcon,
} from 'mdbreact';
import { Link } from 'react-router-dom';
import Moment from 'react-moment';
import tournamentRequests from '../../../helpers/data/tournamentRequests';
import tableProperties from '../../../helpers/tableProperties';
import './Tournament.scss';

class Tournament extends React.Component {
  state = {
    tournaments: [],
    rows: [],
    data: tableProperties.defaultTournamentData,
  }

  componentWillMount() {
    this.getWTATournaments();
  }

  getWTATournaments = () => {
    tournamentRequests.getWomenTournaments().then((data) => {
      this.setState({ tournaments: data });
      this.dataBuilder(data);
    }).catch(err => console.error('error getting WTA tournaments on Tournament.js', err));
  }

  tableRowBuilder = (tournaments) => {
    const tableRows = [];
    tournaments.map((tournament) => {
      const newTournament = {
        year: Number(tournament.year),
        name: <Link to={`/tournaments/${tournament.tournamentId}`}>{tournament.name}</Link>,
        startDate: <Moment format="MM/DD/YYYY">{tournament.startDate}</Moment>,
        endDate: <Moment format="MM/DD/YYYY">{tournament.endDate}</Moment>,
        level: tournament.categoryName,
        type: <p className='mb-0' style={{ textTransform: 'capitalize' }}>{tournament.type}</p>,
        isFavorite: (tournament.isFavorite === true) ? <MDBIcon icon="star" size="sm" className='btn table-btn' id={tournament.tournamentId} onClick={e => this.isFavorite(e, tournament.tournamentId, tournament.isFavorite)} /> : <MDBIcon far icon="star" size="sm" className='btn table-btn' id={tournament.tournamentId} onClick={e => this.isFavorite(e, tournament.tournamentId, tournament.isFavorite)} />,
      };
      tableRows.push(newTournament);
    });
    this.setState({ rows: tableRows });
  };

  dataBuilder = (tournaments) => {
    const tempData = { ...this.state.data };
    this.tableRowBuilder(tournaments);
    tempData.rows = this.state.rows;
    this.setState({ data: tempData });
  }

  updateIsFavorite = (tournamentId, isFavorite) => {
    tournamentRequests.updateFaveTournament(tournamentId, isFavorite)
      .then(() => {
        this.getWTATournaments();
      })
      .catch(err => console.error('error. unable to mark tournament as favorite', err));
  }

  isFavorite = (e, tournamentId, oldIsfavorite) => {
    e.preventDefault();
    // eslint-disable-next-line no-unneeded-ternary
    const newIsFavorite = (oldIsfavorite === true) ? false : true;
    this.updateIsFavorite(tournamentId, newIsFavorite);
  };


  render() {
    const { data } = this.state;

    return (
      <div className="Tournament">
        <MDBDataTable
          striped
          bordered
          small
          order={['year', 'asc']}
          data={data}
        />
      </div>
    );
  }
}

export default Tournament;
