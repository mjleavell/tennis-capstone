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
    [Route("api/[controller]")]
    [ApiController]
    public class TournamentsController : ControllerBase
    {
        public readonly SportsradarData _tournamentsRepo;

        public TournamentsController()
        {
            _tournamentsRepo = new SportsradarData();
        }

        [HttpGet]
        public IEnumerable GetTournaments()
        {
            return _tournamentsRepo.GetTournaments();
        }

    }
}