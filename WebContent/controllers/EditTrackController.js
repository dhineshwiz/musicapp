angular.module('StarterApp').controller('EditTrackController',
function($scope,$mdDialog,$http,id,edit,tracks,genres,$window)
{
	$scope.label="Edit Track";
	
  
	$scope.track = new tracks();
    
    $scope.geners= new genres();
    $scope.track=tracks.get({id:id},function(){
    	
    $scope.gen=[];	 
    	for(var i=0;i<$scope.track.genres.length;i++)
    	 {
    		$scope.gen.push($scope.track.genres[i].id);
    		 
    		 
        }
    	$scope.track.genres = angular.copy($scope.gen);
    	
    });
   
	
	
	$scope.geners = genres.query();
		
		$scope.cancel=function(){
		$scope.answer();
	}
	
	
		
		
	
  
  $scope.answer = function() {
    
	  $mdDialog.hide();
  };
		
	
	
	
	$scope.addtrack=function()
	{
		$scope.track.$save(function(){
			$scope.answer();
  	  });
		
		
		
	}
	
});
