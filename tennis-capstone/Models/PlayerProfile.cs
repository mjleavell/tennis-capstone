using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tennisCapstone.Models
{
    public class PlayerProfile
    {
        public string SportsradarId { get; set; }
        public string Name { get; set; }
        public string Nationality { get; set; }
        public string Country_Code { get; set; }
        public string Abbreviation { get; set; }
        public string Gender { get; set; }
        public string Date_Of_Birth { get; set; }
        public Int32 Pro_Year { get; set; }
        public string Handedness { get; set; }
        public string Height { get; set; }
        public string Weight { get; set; }
        public Int32 Highest_Singles_Ranking { get; set; }
        public string Date_Highest_Singles_Ranking { get; set; }
        public Int32 Highest_Doubles_Ranking { get; set; }
        public string Date_Highest_Doubles_Ranking { get; set; }
    }
}
