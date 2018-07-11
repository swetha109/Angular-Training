angular.module("project1",[])
.controller("ctrl",ctrl)
.controller("ctrl1",ctrl1)
.controller("ctrl2",ctrl2)

function ctrl($scope)
{
   $scope.obj1={name:"Ramu",salary:"2500",age:"25",gender:"male"};
   $scope.arr=["java","javascript","HTML"];

}
function ctrl1($scope)
{
$scope.obj2={name:"Sam",salary:"1500",age:"35",gender:"male"};
$scope.arr1=[{type:"bmw",model:500},{type:"Hire",model:"4678"}];
}
function ctrl2($scope)
{
$scope.obj3={name:"Tom",salary:"150",age:"15",gender:"male"};
$scope.arr2=[{type:"audi",model:500},{type:"Hire",model:"4678"}];
}