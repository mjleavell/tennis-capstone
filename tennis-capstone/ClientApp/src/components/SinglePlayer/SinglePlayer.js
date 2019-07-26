import React from 'react';
import PropTypes from 'prop-types';
import './SinglePlayer.scss';

class SinglePlayer extends React.Component {
  static propTypes = {
    player: PropTypes.object,
    updateIsFavorite: PropTypes.func,
  }

  isFavorite = (e, playerId, isFavorite) => {
    e.preventDefault();
    const { updateIsFavorite } = this.props;
    // eslint-disable-next-line no-unneeded-ternary
    const newIsFavorite = isFavorite === true ? false : true;
    updateIsFavorite(playerId, newIsFavorite);
  }

  render() {
    const { player } = this.props;

    const isFavoriteBuilder = (player.isFavorite === false) ? <i className="material-icons">star_border</i> : <i className="material-icons">star</i>;

    return (
      <tr className="SinglePlayer">
        {/* <th scope="row">{player.currentSinglesRanking}</th> */}
        <th scope="row">{player.currentSinglesRanking}</th>
        <td>{player.name}</td>
        <td>{player.nationality}</td>
        <td>{player.rankingPoints}</td>
        <td>{player.tournamentsPlayed}</td>
        <td><button className='btn' id={player.playerId} onClick={e => this.isFavorite(e, player.playerId, player.isFavorite)}>{isFavoriteBuilder}</button></td>
      </tr>
    );
  }
}

export default SinglePlayer;
