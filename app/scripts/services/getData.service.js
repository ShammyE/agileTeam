angular.module("agileAppApp").factory("Data", [
  "$http",
  function($http) {
    return {
      getAllAssociates: function() {
        return $http.get("data/associates_combined.json");
      },
        getAllTeams: function() {
        return $http.get("data/team_combined.json");
      }
    };
  }
]);
