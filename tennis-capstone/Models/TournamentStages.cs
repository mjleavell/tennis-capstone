using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tennisCapstone.Models
{
    public class TournamentStages
    {
        public string Type { get; set; }
        public IEnumerable<PlayerCategory> Competitors { get; set; }
        public int Number_Of_Scheduled_Matches { get; set; }
    }
}
