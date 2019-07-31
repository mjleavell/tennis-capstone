using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tennisCapstone.Models
{
    public class PlayerRootObject
    {
        public PlayerProfile Player { get; set; }
        public IEnumerable<ProfileRankings> Rankings { get; set; }
        //public StatsRootObject Statistics { get; set; }
        public IEnumerable<TournamentFromApi> Tournaments_played { get; set; }
    }
}
