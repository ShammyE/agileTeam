angular.module("agileAppApp").component("associates", {
  templateUrl: "views/associates.component.html",
  controllerAs: "model",
  controller: ["associateData", function(associateData) {
  		let model = this;
  		associateData.getAllAssociates().
  					then(function (results){
  						model.associates = results.data}
  		)


  		model.orderProp = 'name';
  		model.activeButton = {name:1,aaNum: 0,'team.current':0 ,title:0,teamPos: 0,manager:0} //["Name", "AAnum", "Team" ,'Title', 'Team Position', 'Manager'] Header array
  		console.log(model.activeButton)



  		model.sortFunc = function (prop) {
  			model.orderProp = prop;

  			for(let key in model.activeButton){
  				

  				if(key === prop){
  					console.log(key)
  				console.log(prop)
  					console.log("we made it")
  					model.activeButton[key] = 1
  				}
  				else{
  					model.activeButton[prop] = 0
  				}

  				
  			}

  			console.log(model.activeButton)


  		}

  	}

  ]


});
 