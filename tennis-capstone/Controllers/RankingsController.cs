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

        //[HttpGet]
        //public ActionResult GetRankings()
        //{
        //    var rankings = _rankingRepository.GetRankings();

        //    return Ok(rankings);

        //}

        [HttpGet("api")]
        public RankingRootObject GetRankingsFromApi()
        {
            return _apiRankingRepo.GetRankings();
        }
    }
}