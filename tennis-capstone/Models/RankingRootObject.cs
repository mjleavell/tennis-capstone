using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace tennisCapstone.Models
{
    public class RankingRootObject
    {
        public IEnumerable<RankingsFromApi> rankings { get; set; }
    }
}
