"use strict";

/**
 * @ngdoc overview
 * @name agileAppApp
 * @description
 * # agileAppApp
 *
 * Main module of the application.
 */
angular
  .module("agileAppApp", [
    "ngAnimate",
    "ngCookies",
    "ngResource",
    "ngRoute",
    "ngSanitize",
    "ngTouch"
  ])
  .config(function($routeProvider) {
    $routeProvider
      .when("/", {
        template: "<main></main>"
      })
      .when("/associates", {
        template: "<associates></associates>"
      })
      .when("/projects", {
        template: "<projects></projects>"
      })
      .when("/projects/:projID", {
        template: "<projectdetail></projectdetail>"
      })
      .when("/teams", {
        template: "<teams></teams>"
      })
      .when("/teams/:teamID", {
        template: "<teamdetail></teamdetail>"
      })
      .when("/associates/:associateID", {
        template: "<associatedetail></associatedetail>"
      })
      .when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutCtrl",
        controllerAs: "about"
      })
      .when("/registerAssociate", {
        template: "<registerassociate></registerassociate>"
      })
      .otherwise({
        redirectTo: "/"
      });
  });
