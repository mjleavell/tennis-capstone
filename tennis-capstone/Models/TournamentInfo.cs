using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tennisCapstone.Models
{
    public class TournamentInfo
    {
        public int Prize_Money { get; set; }
        public string Prize_Currency { get; set; }
        public string Surface { get; set; }
        public int Number_Of_Competitors { get; set; }
        public int Number_Of_Qualified_Competitors { get; set; }
        public int Number_Of_Scheduled_Matches { get; set; }
    }
}
