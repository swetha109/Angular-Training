angular.module("Todo",['ngRoute'])
.config(routeConfig)
.controller("regctrl",regctrl)
.controller("homectrl",homectrl)
.controller("taskctrl",taskctrl)
.factory("hometodoList",hometodoList)
.factory("taskList",taskList)

function taskList()
{
  return [];
}
 function hometodoList()
 {
     return {};
 }

function routeConfig($routeProvider)
{
    $routeProvider
    .when("/",{
        templateUrl : "views/regestration.html"
    })
    .when("/home",{
        templateUrl : "views/home.html"
    })
    .when("/task/:taskName",{
        templateUrl : "views/task.html"
    })
.otherwise({redirectTo:'/'})

}
function regctrl($scope,$location,taskList) 
{
    var arr=[];
    $scope.signIn={};
    $scope.signUp={};
    $scope.formValue = true;
    $scope.obj={};
      $scope.toggle = function(x)
    {
        if(x)
        {
            $scope.formValue = false;
        }
        else
        {
            $scope.formValue = true;
        }
    }
   $scope.signup=function()
   {
       arr.push($scope.signUp);
       localStorage.setItem("signUp",JSON.stringify(arr));
       $scope.signUp={};
   }
   $scope.signin=function()
   {
    var rec=localStorage.getItem("signUp");
    var obj = JSON.parse(rec);
       console.log(obj);
       for(var i=0;i<obj.length;i++)
       {
           if($scope.signIn.email==obj[i].email && $scope.signIn.pwd==obj[i].pwd)
           {
               $location.path("/home")
              
               
           }
           
       }


   }
}
function homectrl($scope,hometodoList,taskList)
{
   
    $scope.arr=taskList;
    $scope.buttonToggle= true;
    var index;
 $scope.add=function()
  {
      if($scope.todovalue)
      {
        $scope.arr.push($scope.todovalue);
        hometodoList[$scope.todovalue] = [];
            $scope.todovalue='';
      }
       else
       {
           window.alert('enter something')
       }
    }   
    $scope.editTodo = function(i)
    {
        index=i;
        $scope.todovalue=$scope.arr[i];
        $scope.buttonToggle=false;
        delete hometodoList[$scope.arr[i]]

    }
$scope.updateTodo=function()
{
 if($scope.todovalue)
 {
    console.log(hometodoList); 
    $scope.arr[index]=$scope.todovalue;
    $scope.buttonToggle = true;
    hometodoList[$scope.value] = [];
    $scope.todovalue = '';
    console.log(hometodoList); 

 }
 else
 {
     window.alert('enter something')
 }
}
$scope.deleteTodo = function(i)
{
    if(confirm("Press Ok to delete"))
{
    $scope.arr.splice(i,1);
}
else
{
    return;
}
    
}
$scope.swap = function(x,i)
    {
        if(x)
        {
          var swap =  $scope.arr[i]; 
          $scope.arr[i] =  $scope.arr[i+1];
          $scope.arr[i+1] = swap;
        } else 
         {
            var swap =  $scope.arr[i]; 
          $scope.arr[i] =  $scope.arr[i-1];
          $scope.arr[i-1] = swap;
          console.log(swap); 

        }
   }   }

function taskctrl($scope,$routeParams,hometodoList)
{
    $scope.arr = hometodoList[$routeParams.taskName];
    $scope.buttonToggle = true;
    $scope.headerLine = $routeParams.taskName;
    $scope.add=function()
    {
        if($scope.todovalue)
    {
        $scope.arr.push($scope.todovalue);
        $scope.todovalue='';
        console.log(hometodoList);
    }
        else
       {
           window.alert('enter something')
       }
    }
    $scope.editTodo = function(i)
    {
        index=i;
        $scope.todovalue=$scope.arr[i];
        $scope.buttonToggle=false;
        delete taskList[$scope.arr[i]]

    }
$scope.updateTodo=function()
{
 if($scope.todovalue)
 {
    console.log(taskList); 
    $scope.arr[index]=$scope.todovalue;
    $scope.buttonToggle = true;
    taskList[$scope.todovalue] = [];
    $scope.todovalue = '';
    console.log(taskList); 

 }
 else
 {
     window.alert('enter something')
 }
}
$scope.deleteTodo = function(i)
{
    if(confirm("Press Ok to delete"))
{
    $scope.arr.splice(i,1);
}
else
{
    return;
}
}
    $scope.swap = function(x,i)
    {
        if(x)
        {
          var swap =  $scope.arr[i]; 
          $scope.arr[i] =  $scope.arr[i+1];
          $scope.arr[i+1] = swap;
        } else 
         {
            var swap =  $scope.arr[i]; 
          $scope.arr[i] =  $scope.arr[i-1];
          $scope.arr[i-1] = swap;
          console.log(swap); 

        }
   }   }
