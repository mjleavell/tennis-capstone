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
        public ActionResult AddOrder(TournamentFromApi tournamentObjectFromApi)
        {
            var newTournament = _tournamentsRepo.AddTournaments(tournamentObjectFromApi);

            return Created($"tournaments/{newTournament.TournamentId}", newTournament);
        }

    }
}