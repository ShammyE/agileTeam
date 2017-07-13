angular.module("agileAppApp").component("teamdetail", {
  templateUrl: "views/teamDetail.component.html",
  controllerAs: "model",
  controller: [
    "$routeParams",
    function($routeParams) {
      let model = this;
      model.teamID = $routeParams.teamID;
    }
  ]
});
