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
    public class FavoritesController : ControllerBase
    {
        public readonly FavoritesRepository _faveRepository;

        public FavoritesController()
        {
            _faveRepository = new FavoritesRepository();
        }

        [HttpGet("tournaments")]
        public ActionResult GetFaveTournaments()
        {
            var faveTournaments = _faveRepository.GetFaveTournaments();

            return Ok(faveTournaments);
        }

        [HttpGet("players")]
        public ActionResult GetFavePlayers()
        {
            var favePlayers = _faveRepository.GetFavePlayers();

            return Ok(favePlayers);
        }
    }
}