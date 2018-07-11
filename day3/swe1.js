angular.module("project",[])
.controller("ctrl",ctrl)
.controller("ctrl1",ctrl1)
function ctrl($scope)
{
   $scope.obj={type:"bmw",model:"500",color:"black"};
   $scope.arr=["swe","chan","vani"];

}
function ctrl1($scope)
{
$scope.arr1=[{type:"bmw",model:500},{type:"Hire",model:"4678"}];
}