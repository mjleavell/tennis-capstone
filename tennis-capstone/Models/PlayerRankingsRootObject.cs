using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tennisCapstone.Models
{
    public class PlayerRankingsRootObject
    {
        public IEnumerable<PlayerRankings> Player_Rankings { get; set; }
    }
}
