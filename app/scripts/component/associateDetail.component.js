angular.module("agileAppApp").component("associatedetail", {
  templateUrl: "views/associateDetail.component.html",
  controllerAs: "model",
  controller: [
    "$routeParams",
    "Data",
    function($routeParams, Data) {
      let model = this;
      model.associateID = $routeParams.associateID;

      model.associate = Data.getAssociateById(model.associateID);
    }
  ]
});
