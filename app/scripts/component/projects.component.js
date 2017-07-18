angular.module("agileAppApp").component("projects", {
  templateUrl: "views/projects.component.html",
  controllerAs: "model",
  controller: [
    "Data",
    function(Data) {
      let model = this;
      model.searchTerm = "";
      model.queryBy = "name";

      model.projects = Data.getAllProjects();
      console.log(model.projects);

      model.queryFilter = function() {
        let queryObj = {};
        queryObj[model.queryBy] = model.searchTerm;
        console.log(queryObj);
        return queryObj;
      };
    }
  ]
});
