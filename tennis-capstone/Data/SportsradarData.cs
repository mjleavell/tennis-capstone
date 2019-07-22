using Newtonsoft.Json;
using Newtonsoft.Json.Linq;
using RestSharp;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using tennisCapstone.Models;

namespace tennisCapstone.Data
{
    public class SportsradarData
    {
        public TournamentRootObject GetTournaments()
        {
            var client = new RestClient("https://api.sportradar.com/tennis-t2/en/tournaments.json?api_key=3wwpqgh6fga9fugfj7a83p9r");
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);
            
            var results = JsonConvert.DeserializeObject<TournamentRootObject>(response.Content);
            return results;
        }

        public RankingRootObject GetRankings()
        {
            var client = new RestClient("https://api.sportradar.com/tennis-t2/en/players/rankings.json?api_key=3wwpqgh6fga9fugfj7a83p9r");
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);

            var results = JsonConvert.DeserializeObject<RankingRootObject>(response.Content);
            var womenRankings = results.rankings.Where(p => p.Name == "WTA");
            return results;
        }

        public IEnumerable<PlayerRankings> GetWomenRankings()
        {
            var client = new RestClient("https://api.sportradar.com/tennis-t2/en/players/rankings.json?api_key=3wwpqgh6fga9fugfj7a83p9r");
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);

            var results = JsonConvert.DeserializeObject<RankingRootObject>(response.Content);
            var womenRankings = results.rankings.Where(p => p.Name == "WTA");
            var wta = womenRankings.Select(r => r.Player_Rankings);
            return wta;
        }
    }
}
