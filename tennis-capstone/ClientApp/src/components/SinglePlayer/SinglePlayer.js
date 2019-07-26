import React from 'react';
import PropTypes from 'prop-types';
import './SinglePlayer.scss';

class SinglePlayer extends React.Component {
  static propTypes = {
    player: PropTypes.object,
  }

  render() {
    const { player } = this.props;

    return (
      <tr className="SinglePlayer">
        {/* <th scope="row">{player.currentSinglesRanking}</th> */}
        <th scope="row">{player.currentSinglesRanking}</th>
        <td>{player.name}</td>
        <td>{player.nationality}</td>
        <td>{player.rankingPoints}</td>
        <td>{player.tournamentsPlayed}</td>
        <td><i className="material-icons">star_border</i></td>
      </tr>
    );
  }
}

export default SinglePlayer;
