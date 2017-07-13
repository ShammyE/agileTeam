angular.module("agileAppApp").factory("Data", [
  "$http",
  function($http) {
    return {
      getAllAssociates: function() {
        return $.ajax({
          method: "GET",
          url: "data/associates_combined.json",
          async: false
        }).responseJSON;
      },
      getAllTeams: function() {
        return $.ajax({
          method: "GET",
          url: "data/team_combined.json",
          async: false
        }).responseJSON;
      },
      getTeamById: function(id) {
        let teams = this.getAllTeams();

        teamfiltered = teams.filter(function(team) {
          return team.id === id;
        });

        return teamfiltered[0];
      }
    };
  }
]);
