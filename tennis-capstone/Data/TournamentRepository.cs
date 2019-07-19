using Dapper;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using tennisCapstone.Models;

namespace tennisCapstone.Data
{
    public class TournamentRepository
    {
        const string ConnectionString = "Server = localhost; Database = TennisExplorer; Trusted_Connection = True;";

        public Tournament AddTournaments(IEnumerable<TournamentFromApi> tournamentObjectList)
        {
            using (var db = new SqlConnection(ConnectionString))
            {
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

                    db.Execute(insertQuery, parameters);
                    //var newTournament = db.Execute(insertQuery, tournamentObjectList);
                    //connection.Execute("INSERT INTO MYTABLE VALUES (@A, @B)", myList);
                    //if (newTournament != null)
                    //{
                    //    return newTournament;
                    //}

                }
                throw new Exception("Unable to add new tournament to database");
            }
        }
    }
}
