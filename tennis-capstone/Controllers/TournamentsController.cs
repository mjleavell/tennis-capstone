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
    public class TournamentsController : ControllerBase
    {
        public readonly SportsradarData _apiTourneyRepo;
        public readonly TournamentRepository _tournamentsRepo;

        public TournamentsController()
        {
            _apiTourneyRepo = new SportsradarData();
            _tournamentsRepo = new TournamentRepository();
        }

        [HttpGet]
        public ActionResult GetAllTournaments()
        {
            var allTournaments = _tournamentsRepo.GetTournaments();

            return Ok(allTournaments);

        }

        [HttpGet("women")]
        public ActionResult GetAllWomenTournaments()
        {
            var womenTournaments = _tournamentsRepo.GetWomenTournaments();

            return Ok(womenTournaments);

        }

        [HttpGet("api")]
        public TournamentRootObject GetTournamentsFromApi()
        {
            return _apiTourneyRepo.GetTournaments();
        }

        [HttpPost]
        public ActionResult AddTournaments()
        {
            IEnumerable<TournamentFromApi> allTournaments = _apiTourneyRepo.GetTournaments().tournaments;

            var newTournaments = _tournamentsRepo.AddTournaments(allTournaments);

            return Created("newtournaments", newTournaments);
        }

        [HttpPut("{tournamentId}")]
        public ActionResult UpdateIsFavorite(int tournamentId, bool isFavorite)
        {
            _tournamentsRepo.UpdateIsFavorite(tournamentId, Convert.ToInt32(isFavorite));

            return Ok();
        }

        [HttpGet("{tournamentId}")]
        public ActionResult GetSingleTournament(int tournamentId)
        {
            var singleTournament = _tournamentsRepo.GetSingleTournament(tournamentId);

            return Ok(singleTournament);
        }

        [HttpGet("api/profile")]
        public TournamentyProfileRoot GetTournamentProfile(string sportsRadarId)
        {
            return _apiTourneyRepo.GetTournamentProfile(sportsRadarId);
        }
    }
}