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
                // create a new list so that I can use methods on that list
                var allRankings = new List<Player>();

                    foreach (PlayerRankings player in rankingListObjectFromApi)
                    {
                        var insertQuery = @"
                            INSERT INTO[dbo].[PlayerRankings]
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

                // if there are any tournaments, return them
                // if you want to get womens, you can do any where = womens
                if (allRankings.Any())
                {
                    return allRankings;
                }
                //if there aren't any tournaments in the list, throw an error
                throw new Exception("No rankings were returned from api");
            }
        }
    }
}
