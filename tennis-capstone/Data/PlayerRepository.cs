using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using tennisCapstone.Models;

namespace tennisCapstone.Data
{
    public class PlayerRepository
    {
        const string ConnectionString = "Server = localhost; Database = TennisExplorer; Trusted_Connection = True;";

        public Player GetSinglePlayer(int playerId)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var getQuery = "SELECT * FROM Players WHERE playerId = @playerId";

                var parameter = new { PlayerId = playerId };

                var player = db.QueryFirst<Player>(getQuery, parameter);

                return player;
            }
        }
    }
}
