angular.module("agileAppApp").component("associates", {
  templateUrl: "views/associates.component.html",
  controllerAs: "model",
  controller: ["associateData", function(associateData) {
  		let model = this;
  		associateData.getAllAssociates().
  					then(function (results){
  						model.associates = results.data}
  		)
  	}

  ]


});
