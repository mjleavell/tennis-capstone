
const tournamentColumns = [
  {
    label: 'Year',
    field: 'year',
    sort: 'desc',
  },
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
    label: 'Tournament Type',
    field: 'categoryName',
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

const playerColumns = [
  {
    label: 'Rank',
    field: 'currentSinglesRanking',
    sort: 'asc',
  },
  {
    label: 'Name',
    field: 'name',
    sort: 'asc',
  },
  {
    label: 'Points',
    field: 'rankingPoints',
    sort: 'asc',
  },
  {
    label: 'Tournaments Played',
    field: 'tournamentsPlayed',
    sort: 'asc',
  },
  {
    label: 'Nationality',
    field: 'nationality',
    sort: 'asc',
  },
  {
    label: 'Favorite',
    field: 'isFavorite',
    sort: 'asc',
  },
];

const defaultPlayerData = {
  columns: playerColumns,
  rows: [],
};

const defaultTournamentData = {
  columns: tournamentColumns,
  rows: [],
};

const convertStringToNumber = (stringToConvert) => {
  const stringToNumber = Number(stringToConvert);
  return stringToNumber.toLocaleString();
};

export default {
  playerColumns,
  tournamentColumns,
  defaultPlayerData,
  defaultTournamentData,
  convertStringToNumber,
};
