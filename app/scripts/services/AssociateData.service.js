angular.module("agileAppApp").factory("associateData", [
  "$http",
  function($http) {
    return {
      getAllAssociates: function() {
        return $http.get("data/associates_combined.json");
      }
    };
  }
]);
