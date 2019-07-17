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
        public IEnumerable GetTournaments()
        {
            //var urlKey = appsettings.sport
            //const url = $"https://api.sportradar.com/tennis-t2/en/tournaments.json?api_key={sportsRadar.key}"
            var client = new RestClient("https://api.sportradar.com/tennis-t2/en/tournaments.json?api_key=3wwpqgh6fga9fugfj7a83p9r");
            var request = new RestRequest(Method.GET);
            IRestResponse response = client.Execute(request);

            var tournaments = JObject.Parse(response.Content);
            return tournaments;
        }
    }
}
