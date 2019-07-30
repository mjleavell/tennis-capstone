using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using tennisCapstone.Models;

namespace tennisCapstone.Data
{
    public class FavoritesRepository
    {
        const string ConnectionString = "Server = localhost; Database = TennisExplorer; Trusted_Connection = True;";

        public IEnumerable<Tournament> GetFaveTournaments()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var getQuery = "SELECT * from Tournaments WHERE IsFavorite = 1";

                var faveTournaments = db.Query<Tournament>(getQuery).ToList();

                return faveTournaments;
            }
        }

        public IEnumerable<Player> GetFavePlayers()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var getQuery = "SELECT * from Players WHERE IsFavorite = 1";

                var favePlayers = db.Query<Player>(getQuery).ToList();

                return favePlayers;
            }
        }
    }
}
