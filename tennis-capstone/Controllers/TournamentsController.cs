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

        [HttpGet("api")]
        public RootObject GetTournamentsFromApi()
        {
            return _apiTourneyRepo.GetTournaments();
        }

        [HttpPost]
        public ActionResult AddTournaments()
        {
            IEnumerable<TournamentFromApi> allTournaments = _apiTourneyRepo.GetTournaments().tournaments;
            //List<TournamentFromApi> allTournaments = allTournamentsFromApi.tournaments.ToList();

            var newTournament = _tournamentsRepo.AddTournaments(allTournaments);

            return Created($"tournaments/{newTournament.TournamentId}", newTournament);
        }

    }
}