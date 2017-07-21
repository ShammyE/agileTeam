angular.module("agileAppApp").component("registerteam", {
  templateUrl: "views/registerTeam.component.html",
  controllerAs: "model",
  controller: [
    "Data",
    function(Data) {
      let model = this;
      model.searchTerm = "";
      model.queryBy = "teamName";

      model.teams = Data.getAllTeams();
    }
  ]
});
