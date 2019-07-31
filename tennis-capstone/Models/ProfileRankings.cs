using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tennisCapstone.Models
{
    public class ProfileRankings
    {
        public string SportsradarId { get; set; }
        public int Points { get; set; }
        public int Rank { get; set; }
        public bool Race_Ranking { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
    }
}
