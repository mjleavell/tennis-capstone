using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tennisCapstone.Models
{
    public class PlayerRankings
    {
        public int Rank { get; set; }
        public int Points { get; set; }
        public int Ranking_Movement { get; set; }
        public int Tournaments_Played { get; set; }
        public PlayerCategory Player { get; set; }
    }
}
