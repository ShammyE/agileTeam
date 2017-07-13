angular.module("agileAppApp").component("teams", {
  templateUrl: "views/teams.component.html",
  controllerAs: "model",
  controller: ["Data", function(Data) {
  	let model = this;
			model.query = {}
		  	model.queryBy ="teamName";
  		
		Data.getAllTeams().then(function(results) {
        model.teams = results.data;
        
      });

  }]
});
