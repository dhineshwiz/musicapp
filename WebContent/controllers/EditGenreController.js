angular.module('StarterApp').controller('EditGenreController',
function($scope,$mdDialog,$http,id,edit,genres)
{
	$scope.label="Edit Genres";
	$scope.gener = new genres();
	
	
	$scope.gener=genres.get({id:id});
	
	
	

	
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
});
