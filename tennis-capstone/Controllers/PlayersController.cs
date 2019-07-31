using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using tennisCapstone.Data;
using tennisCapstone.Models;

namespace tennisCapstone.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class PlayersController : ControllerBase
    {
        public readonly PlayerRepository _playerRepository;
        public readonly SportsradarData _apiPlayerRepo;

        public PlayersController()
        {
            _playerRepository = new PlayerRepository();
            _apiPlayerRepo = new SportsradarData();
        }

        [HttpGet("{playerId}")]
        public ActionResult GetSinglePlayer(int playerId)
        {
            var singlePlayer = _playerRepository.GetSinglePlayer(playerId);

            return Ok(singlePlayer);
        }

        [HttpGet("api")]
        public PlayerRootObject GetPlayerProfile(string sportsRadarId)
        {
            return _apiPlayerRepo.GetProfile(sportsRadarId);
        }

    }
}