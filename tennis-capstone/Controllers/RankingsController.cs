using System;
using System.Collections;
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
    public class RankingsController : ControllerBase
    {
        public readonly SportsradarData _apiRankingRepo;
        public readonly RankingRepository _rankingRepository;

        public RankingsController()
        {
            _apiRankingRepo = new SportsradarData();
            _rankingRepository = new RankingRepository();
        }

        [HttpGet]
        public ActionResult GetPlayerRankings()
        {
            var allRankings = _rankingRepository.GetRankings();

            return Ok(allRankings);

        }

        // get ATP and WTA rankings from sportsradar
        [HttpGet("api")]
        public RankingRootObject GetRankingsFromApi()
        {
            return _apiRankingRepo.GetRankings();
        }

        // get only WTA rankings from sportsradar
        [HttpGet("api/wta")]
        public IEnumerable<PlayerRankings> GetWTARankingsFromApi()
        {
            return _apiRankingRepo.GetWomenRankings();
        }

        [HttpPost]
        public ActionResult AddPlayersToDb()
        {
            IEnumerable<PlayerRankings> allRankings = _apiRankingRepo.GetWomenRankings();

            var newRankings = _rankingRepository.AddPlayerRankings(allRankings);

            return Created("rankings", newRankings);
        }


    }
}