using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tennisCapstone.Models
{
    public class Tournament
    {
        //public int TournamentId { get; set; }
        public string Id { get; set; }
        public string Name { get; set; }
        public Category Category { get; set; }
        public CurrentSeason Current_Season { get; set; }
        public string Type { get; set; }
        public string Gender { get; set; }
        //public bool IsFavorite { get; set; }
    }
}
