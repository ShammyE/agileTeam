angular.module("agileAppApp").component("projectdetail", {
  templateUrl: "views/projectDetail.component.html",
  controllerAs: "model",
  controller: [
    "$routeParams",
    "Data",
    function($routeParams, Data) {
      console.log("cool");
      let model = this;
      model.projectID = $routeParams.projID;

      model.project = Data.getProjectById(model.projectID);

      model.stories = Data.getStoriesByIdList(model.project.stories);
    }
  ]
});
