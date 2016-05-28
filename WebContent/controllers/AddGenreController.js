angular.module('StarterApp').controller('AddGenreController',
function($scope,$mdDialog,$http,id,edit,genres)
{
	$scope.label="Add Genre";
	//$scope.gener={};
	//alert("inside outer fun");
	//var data22 = JSON.stringify($scope.gener);
	
	$scope.addgener=function()
	{
		
		genres.addgenres($scope.gener).then(function(reponse){
		//alert("inside inner fun"); 
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