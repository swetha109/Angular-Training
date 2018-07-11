angular.module("route",["ngRoute"])
.controller("ctrl",ctrl)
.config(routeConfig)
function ctrl($scope)
{
}
  function routeConfig($routeProvider)
  {
    $routeProvider
    .when("/home", {
      templateUrl :"template/main.html"
  })
  .when("/blue", {
    templateUrl :"template/blue.html"
})
.when("/green", {
  templateUrl :"template/green.html"
})
.otherwise({redirectTo:"/home"})
  }
