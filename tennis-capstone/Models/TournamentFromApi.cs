using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tennisCapstone.Models
{
    public class TournamentFromApi
    {
        public string Id { get; set; }
        public string Name { get; set; }
        public Category Category { get; set; }
        public CurrentSeason Current_Season { get; set; }
        public string Type { get; set; }
        public string Gender { get; set; }
    }
}
