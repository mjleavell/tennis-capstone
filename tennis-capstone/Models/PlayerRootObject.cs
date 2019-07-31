using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tennisCapstone.Models
{
    public class PlayerRootObject
    {
        public PlayerProfile player { get; set; }
        public IEnumerable rankings { get; set; }
        public StatsRootObject statistics { get; set; }
        public IEnumerable tournaments_played { get; set; }
    }
}
