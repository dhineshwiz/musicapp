angular.module('StarterApp').controller('AddGenreController',
function($scope,$mdDialog,$http,id,edit,genres)
{
	$scope.label="Add Genre";
	
	$scope.gener = new genres();
	
	$scope.addgener=function()
	{
		
		
		$scope.gener.$save(function(){
			$scope.answer();
	  	  });
		
		
	
	}
	
	$scope.cancel=function()
	{
		$mdDialog.hide();
	}
	
	
		
		
	
  
  $scope.answer = function() {
    $mdDialog.hide();
  };
}
);