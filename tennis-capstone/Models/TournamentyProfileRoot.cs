using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tennisCapstone.Models
{
    public class TournamentyProfileRoot
    {
        public TournamentFromApi Tournament { get; set; }
        public Season Season { get; set; }
        public TournamentRound Tournament_Round { get; set; }
        public TournamentInfo Info { get; set; }
        public TournamentCoverage Coverage_Info { get; set; }
        public TournamentPastWinner Winner_Last_Season { get; set; }
        public IEnumerable<PlayerCategory> Competitors { get; set; }
        public IEnumerable<TournamentStages> Stages { get; set; }
    }
}
