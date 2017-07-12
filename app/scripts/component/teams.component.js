angular.module("agileAppApp").component("teams", {
  templateUrl: "views/teams.component.html",
  controllerAs: "model",
  controller: ["associateData", function(associateData) {}] //Not sure what the controller should be here...
});
