angular.module("customDirective",[])
.controller("homtCtrl",homtCtrl)
.directive('myBook', myBook)
.directive("methodDirective",methodDirective) 
.directive('twoWayDirective', twoWayDirective)
.directive('oneWayDirective', oneWayDirective)
.directive("sharedDirective",sharedDirective) 
.directive("inheritedDirective",inheritedDirective) 
function homtCtrl($scope)
{


	$scope.hack="Hacker";
	$scope.student = 
			{
				name: 'Swetha',
				class: 'B.E',
				Address: 'Chinthamani'    
			};
	$scope.swapData = function () 
		{
			$scope.student = 
					{
						name: 'Raj',
						class: 'kumar'
					};
		};
	$scope.book = 
		{  
			name:'Rishav',   
			author:'Srivastava'  
		};  
};


function myBook() 
	{
		return {
				restrict :'EA',
				scope: {book: '='},
				template: 
					'Name: {{book.name}}, Author: {{book.author}}',
			link: 
				function ($scope, element, attrs) 
					{
						element.css('cursor','pointer');
						element.css('font-size','20px');
						element.bind('click', function () 
							{
								element.html('You clicked the book: '+ $scope.book.name);
							});
						element.bind('mouseenter', function () 
							{
								element.css('color', 'yellow');
								element.css('background-color', 'blue');
							});
						element.bind('mouseleave', function () 
							{
								element.css('color', 'white');
								element.css('background-color', 'black');
							});
				    }	
			};
	}; 

function methodDirective() 
	{
		return {
			scope: { student: '=', swap: '&'},
			template: '<div>the changed names are, {{student.name + student.class}}!</div>'+
				"<button id='btn1' ng-click='swap()'>Click here to Swap student Data</button>"
			   };
	};

 function twoWayDirective() 
	{
		return {
			restrict: 'EA',
			scope: { student: '='},
			template: '<div>Welcome, {{student.name + student.class}}!</div>'
		};
	};


function oneWayDirective() 
	{
		return {
			scope: { naame: '@'},
			template: 'Student  Name: {{ naame }}'
			   };
	};
function sharedDirective() 
	{
		return {
			restrict: "EA",
			scope: false,
			template: "<div>Directive scope value(false) : {{ hack }}</div>" +
			"Change directive scope value : <input type='text' ng-model='hack' />"
		};
	};

function inheritedDirective() 
	{
		return {
			restrict: "EA",
			scope: true,
			template: "<div>Directive scope value (true) : {{ hack }}</div>" +
			"Change directive scope value : <input type='text' ng-model='hack' />"
			   };
	};