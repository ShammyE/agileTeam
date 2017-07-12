angular.module("agileAppApp").component("associates", {
  templateUrl: "views/associates.component.html",
  controllerAs: "model",
  controller: [
    "Data",
    function(Data) {
      let model = this;

      model.orderProp = "name";
      model.activeSortButton = {
        name: { active: 1, header: "name" },
        aaNum: { active: 0, header: "AA Number" },
        "team.current": { active: 0, header: "Team" },
        title: { active: 0, header: "Title" },
        teamPos: { active: 0, header: "Team Position" },
        manager: { active: 0, header: "Manager" }
      };

      Data.getAllAssociates().then(function(results) {
        model.associates = results.data;
      });

      model.sortFunc = function(prop) {
        model.orderProp = prop;
        model.toggleButtonPrimary(prop);
      };

      model.toggleButtonPrimary = function(prop) {
        for (let key in model.activeSortButton) {
          if (key === prop) {
            model.activeSortButton[key].active = 1;
          } else {
            model.activeSortButton[key].active = 0;
          }
        }
      };
    }
  ]
});
