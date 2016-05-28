angular.module('StarterApp').controller('EditTrackController',
function($scope,$mdDialog,$http,id,edit,tracks,genres)
{
	$scope.label="Edit Track";
	$scope.track={};
	
	
	
	tracks.edittracks(id).then(function(response){
		
		//type casting the data
		$scope.track.title=response.data.title;
		var rating=response.data.rating;
		rating=+rating;
		
		rating=rating;
		$scope.track.rating=rating;
		var gen=response.data.geners;
		for(var i=0;i<gen.length();i++)
		{
			$scope.track.geners[i].push(
			{id:response.data.genres[i].id
			});
			
		}
		
		
	});
	
	genres.getgenres().then(function(response){
		alert("inside");
		
		$scope.geners=response.data;
		
	
	})
	
		
		$scope.cancel=function(){
		$scope.answer();
	}
	
	
		
		
	
  
  $scope.answer = function() {
    
	  $mdDialog.hide();
  };
		
	
	
	
	$scope.addtrack=function()
	{
		var data=JSON.stringify($scope.track);
		tracks.edittracksupdate(id,data).then(function(response){
			
			
			$scope.answer();
			
		});
		
		
		
	}
	
});
