using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using tennisCapstone.Models;

namespace tennisCapstone.Data
{
    public class TournamentRepository
    {
        const string ConnectionString = "Server = localhost; Database = TennisExplorer; Trusted_Connection = True;";

        public IEnumerable<Tournament> AddTournaments(IEnumerable<TournamentFromApi> tournamentObjectList)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
                var allTournaments = new List<Tournament>();

                foreach (TournamentFromApi tournament in tournamentObjectList)
                {
                    var insertQuery = @"
                        INSERT INTO [dbo].[Tournaments]
                                   ([SportsradarId]
                                   ,[Name]
                                   ,[StartDate]
                                   ,[EndDate]
                                   ,[Year]
                                   ,[Level]
                                   ,[Type]
                                   ,[Gender]
                                   ,[IsFavorite])
                        OUTPUT inserted.*
                             VALUES
                                   (@sportsradarId
                                   ,@name
                                   ,@startDate
                                   ,@endDate
                                   ,@year
                                   ,@level
                                   ,@type
                                   ,@gender
                                   ,@isFavorite)";

                    var parameters = new
                    {
                        SportsradarId = tournament.Id,
                        Name = tournament.Name,
                        StartDate = tournament.Current_Season.Start_Date,
                        EndDate = tournament.Current_Season.End_Date,
                        Year = tournament.Current_Season.Year,
                        Level = tournament.Category.Level,
                        Type = tournament.Type,
                        Gender = tournament.Gender,
                        IsFavorite = false
                    };

                    Tournament newTournament;

                    try
                    {
                        newTournament = db.QueryFirstOrDefault<Tournament>(insertQuery, parameters);
                    }
                    catch (Exception ex)
                    {

                        throw;
                    }

                    if (newTournament == null)
                    {
                        throw new Exception("Unable to add new tournament to database");
                    }

                    allTournaments.Add(newTournament);
                }

                // if there are any tournaments, return them
                if (allTournaments.Any())
                {
                    return allTournaments;
                }
               
                //if there aren't any tournaments in the list, throw an error
                throw new Exception("There are no tournaments from api");
            }
        }
    }
}
