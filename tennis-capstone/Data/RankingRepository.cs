using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using tennisCapstone.Models;

namespace tennisCapstone.Data
{
    public class RankingRepository
    {
        const string ConnectionString = "Server = localhost; Database = TennisExplorer; Trusted_Connection = True;";

        public IEnumerable<Player> AddPlayerRankings(IEnumerable<PlayerRankings> rankingListObjectFromApi)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allRankings = new List<Player>();

                    foreach (PlayerRankings player in rankingListObjectFromApi)
                    {
                        var insertQuery = @"
                            INSERT INTO[dbo].[Players]
                                        ([SportsradarId]
                                        ,[Name]
                                        ,[CurrentSinglesRanking]
                                        ,[RankingPoints]
                                        ,[TournamentsPlayed]
                                        ,[Nationality]
                                        ,[IsFavorite])
                            OUTPUT inserted.*
                                 VALUES
                                        (@SportsradarId
                                        ,@Name
                                        ,@CurrentSinglesRanking
                                        ,@RankingPoints
                                        ,@TournamentsPlayed
                                        ,@Nationality
                                        ,@IsFavorite)";

                        var parameters = new
                        {
                            SportsradarId = player.Player.Id,
                            Name = player.Player.Name,
                            CurrentSinglesRanking = player.Rank,
                            RankingPoints = player.Points,
                            TournamentsPlayed = player.Tournaments_Played,
                            Nationality = player.Player.Nationality,
                            IsFavorite = false
                        };

                        Player newPlayerRanking;

                        try
                        {
                            newPlayerRanking = db.QueryFirstOrDefault<Player>(insertQuery, parameters);
                        }
                        catch (Exception ex)
                        {

                            throw;
                        }

                        if (newPlayerRanking == null)
                        {
                            throw new Exception("Unable to add new Player to database");
                        }

                        allRankings.Add(newPlayerRanking);
                    }

                if (allRankings.Any())
                {
                    return allRankings;
                }

                throw new Exception("No rankings were returned from api");
            }
        }

        public IEnumerable<Player> GetRankings()
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var getQuery = "SELECT * FROM Players";

                var playerRankings = db.Query<Player>(getQuery).ToList();

                return playerRankings;
            }
        }

        public void UpdateIsFavorite(int id, bool isFavorite)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var parameter = new {
                    PlayerId = id,
                    IsFavorite = isFavorite
                };

                var updateQuery = "UPDATE players SET isFavorite = @isFavorite WHERE playerId = @playerId";

                var rowsAffected = db.Execute(updateQuery, parameter);

                if (rowsAffected != 1)
                {
                    throw new Exception("Unable to to favorite that player");
                }
            }
        }
    }
}
