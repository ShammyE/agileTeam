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
        template: "<associates></associates>"
      })
      .when("/about", {
        templateUrl: "views/about.html",
        controller: "AboutCtrl",
        controllerAs: "about"
      })
      .otherwise({
        redirectTo: "/"
      });
  });
