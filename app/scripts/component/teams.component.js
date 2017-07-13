angular.module("agileAppApp").component("teams", {
  templateUrl: "views/teams.component.html",
  controllerAs: "model",
  controller: ["Data", function(Data) {
  	let model = this;
  			model.searchTerm = "";
		  	model.queryBy ="teamName";

  		
		Data.getAllTeams().then(function(results) {
        model.teams = results.data;

        model.queryFilter = function(){
    		let queryObj = {};
        	queryObj[model.queryBy] = model.searchTerm;
        	console.log(queryObj);
        	return queryObj;

        }
        
      });

  }]
});
