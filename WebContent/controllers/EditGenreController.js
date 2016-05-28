angular.module('StarterApp').controller('EditGenreController',
function($scope,$mdDialog,$http,id,edit,genres)
{
	$scope.label="Edit Genres";
	
	genres.editgenres(id).then(function(response){
		
		$scope.gener=response.data;
	})
	
	
	

	//var data22 = JSON.stringify($scope.gener);
	$scope.addgener=function()
	{
		
		genres.editupdategenres(id,$scope.gener).then(function(response){
			
			$scope.answer();
		});
		

	}
	$scope.cancel=function()
	{
		$scope.answer();
	}
	$scope.answer = function() {
		
		$mdDialog.hide();
    
  };
});
