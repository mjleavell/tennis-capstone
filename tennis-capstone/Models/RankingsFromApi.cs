using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tennisCapstone.Models
{
    public class RankingsFromApi
    {
        public string Name { get; set; }
        public string Type { get; set; }
        public int Year { get; set; }
        public int Week { get; set; }
        public string Category_Id { get; set; }
        public IEnumerable<PlayerRankings> Player_Rankings { get; set; }
    }
}
