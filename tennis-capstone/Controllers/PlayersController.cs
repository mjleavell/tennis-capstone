using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using tennisCapstone.Data;

namespace tennisCapstone.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PlayersController : ControllerBase
    {
        public readonly PlayerRepository _playerRepository;

        public PlayersController()
        {
            _playerRepository = new PlayerRepository();
        }

        [HttpGet("{playerId}")]
        public ActionResult GetFaveTournaments(int playerId)
        {
            var singlePlayer = _playerRepository.GetSinglePlayer(playerId);

            return Ok(singlePlayer);
        }

    }
}