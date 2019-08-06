/* eslint-disable array-callback-return */
import React from 'react';
import {
  LineChart,
  Line,
  CartesianGrid,
  Tooltip,
  Legend,
  XAxis,
  YAxis,
} from 'recharts';
import PropTypes from 'prop-types';

class PlayerGraph extends React.Component {
  static propTypes = {
    stats: PropTypes.array,
  }

  render() {
    const { stats } = this.props;

    return (
      <div className='PlayerGraph'>
        <h4 className='text-center mt-4'>Career Stats</h4>
        <LineChart className="mx-auto" width={600} height={300} data={stats}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="year" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="matchesPlayed" stroke="#556270" strokeWidth="2" name="Matches Played" />
          <Line type="monotone" dataKey="matchesWon" stroke="#0A4C86" strokeWidth="2" name="Matches Won" />
          <Line type="monotone" dataKey="tournamentsPlayed" stroke="#94EDFF" strokeWidth="2" name="Tournaments Played" />
          <Line type="monotone" dataKey="tournamentsWon" stroke="#B4F8C8" strokeWidth="2" name="Tournaments Won" />
        </LineChart>
      </div>
    );
  }
}

export default PlayerGraph;
