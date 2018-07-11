
  angular.module("project", [])
.controller("ctrl",ctrl)

    function ctrl($scope) 
    
    {
      $scope.count = 0;
      $scope.myFun= function() 
      {
        $scope.count++;
      }
    }
