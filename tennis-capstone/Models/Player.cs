using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tennisCapstone.Models
{
    public class Player
    {
        public int PlayerId { get; set; }
        public string SportsradarId { get; set; }
        public string Name { get; set; }
        public int CurrentSinglesRanking { get; set; }
        public int RankingPoints { get; set; }
        public int TournamentsPlayed { get; set; }
        public string Nationality { get; set; }
        public bool IsFavorite { get; set; }
    }
}
