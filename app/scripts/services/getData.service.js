angular.module("agileAppApp").factory("Data", [
  "$http",
  function($http) {
    let getAllData = function(URL) {
      return $.ajax({
        method: "GET",
        url: URL,
        async: false,
        error: function(request, status, error) {
          console.error(error);
        }
      }).responseJSON;
    };
    return {
      getAllAssociates: function() {
        return getAllData("/data/associates");
      },
      getAllTeams: function() {
        return getAllData("/data/teams");
      },
      getTeamById: function(id) {
        let teams = this.getAllTeams();

        let teamfiltered = teams.filter(function(team) {
          return team.id === id;
        });

        return teamfiltered[0];
      },
      getAssociateById: function(id) {
        let associates = this.getAllAssociates();

        let associatefiltered = associates.filter(function(associate) {
          return associate.aaNum === id;
        });

        return associatefiltered[0];
      },
      getAllProjects: function() {
        return getAllData("/data/projects");
      },
      getProjectById: function(id) {
        let projects = this.getAllProjects();

        let projectfiltered = projects.filter(function(project) {
          return project.id === id;
        });

        return projectfiltered[0];
      },
      getAllStories: function() {
        return getAllData("/data/stories");
      },
      getStoriesByIdList: function(idList) {
        let stories = this.getAllStories();

        let storiesfiltered = stories.filter(function(story) {
          return idList.includes(story.id);
        });

        return storiesfiltered;
      }
    };
  }
]);
