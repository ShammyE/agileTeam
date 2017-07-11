angular.module("agileAppApp").component("associates", {
  templateUrl: "views/associates.component.html",
  controllerAs: "model",
  controller: [
    "associateData",
    function(associateData) {
      let model = this;

      model.orderProp = "name";
      model.activeButton = {
        name: 1,
        aaNum: 0,
        "team.current": 0,
        title: 0,
        teamPos: 0,
        manager: 0
      }; //["Name", "AAnum", "Team" ,'Title', 'Team Position', 'Manager'] Header array

      associateData.getAllAssociates().then(function(results) {
        model.associates = results.data;
      });

      model.sortFunc = function(prop) {
        model.orderProp = prop;
        model.toggleButtonPrimary(prop);
      };

      model.toggleButtonPrimary = function(prop) {
        for (let key in model.activeButton) {
          if (key === prop) {
            model.activeButton[key] = 1;
          } else {
            model.activeButton[key] = 0;
          }
        }
      };
    }
  ]
});
