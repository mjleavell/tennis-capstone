using Dapper;
using System;
using System.Data.SqlClient;
using tennisCapstone.Models;

namespace tennisCapstone.Data
{
    public class TournamentRepository
    {
        const string ConnectionString = "Server = localhost; Database = TennisExplorer; Trusted_Connection = True;";

        public Tournament AddTournaments(RootObject tournamentObjectList)
        {
            using (var db = new SqlConnection(ConnectionString))
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
                    SportsradarId = tournamentObjectFromApi.Id,
                    Name = tournamentObjectFromApi.Name,
                    StartDate = tournamentObjectFromApi.Current_Season.Start_Date,
                    EndDate = tournamentObjectFromApi.Current_Season.End_Date,
                    Year = tournamentObjectFromApi.Current_Season.Year,
                    Level = tournamentObjectFromApi.Category.Level,
                    Type = tournamentObjectFromApi.Type,
                    Gender = tournamentObjectFromApi.Gender,
                    IsFavorite = false
                };

                var newTournament = db.QueryFirstOrDefault<Tournament>(insertQuery, parameters);

                if (newTournament != null)
                {
                    return newTournament;
                }

                throw new Exception("Unable to add new tournament to database");
            }
        }
    }
}
