using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tennisCapstone.Models
{
    public class Tournament
    {
        public int TournamentId { get; set; }
        public int SportsradarId { get; set; }
        public string Name { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string Year { get; set; }
        public string Level { get; set; }
        public string Type { get; set; }
        public string Gender { get; set; }
        public string Surface { get; set; }
        public bool IsFavorite { get; set; }
    }
}
