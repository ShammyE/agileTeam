angular.module("agileAppApp").component("projects", {
  templateUrl: "views/projects.component.html",
  controllerAs: "model",
  controller: ["associateData", function(associateData) {}] //Not sure what the controller should be here...
});
