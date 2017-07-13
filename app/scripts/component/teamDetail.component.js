angular.module("agileAppApp").component("teamdetail", {
  templateUrl: "views/teamDetail.component.html",
  controllerAs: "model",
  controller: [
    "$routeParams",
    "Data",
    function($routeParams, Data) {
      let model = this;
      model.teamID = $routeParams.teamID;

      model.team = Data.getTeamById(model.teamID);
    }
  ]
});
