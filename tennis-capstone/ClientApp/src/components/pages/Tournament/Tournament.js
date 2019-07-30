/* eslint-disable array-callback-return */
/* eslint-disable max-len */
import React from 'react';
import {
  MDBDataTable,
  MDBIcon,
} from 'mdbreact';
import tournamentRequests from '../../../helpers/data/tournamentRequests';
import './Tournament.scss';

const columnsForTable = [
  {
    label: 'Name',
    field: 'name',
    sort: 'asc',
  },
  {
    label: 'Start Date',
    field: 'startDate',
    sort: 'asc',
  },
  {
    label: 'End Date',
    field: 'endDate',
    sort: 'asc',
  },
  {
    label: 'Tournament Level',
    field: 'level',
    sort: 'asc',
  },
  {
    label: 'Type',
    field: 'type',
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

class Tournament extends React.Component {
  state = {
    tournaments: [],
    rows: [],
    data: defaultData,
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
        name: tournament.name,
        startDate: tournament.startDate,
        endDate: tournament.endDate,
        level: tournament.level,
        type: tournament.type,
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
          data={data}
        />
      </div>
    );
  }
}

export default Tournament;
