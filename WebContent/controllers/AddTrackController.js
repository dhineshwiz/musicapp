angular.module('StarterApp').controller('AddTrackController',
function($scope, $mdDialog, $http,id,edit,tracks,genres) {
	$scope.label="Add Track";
	$scope.geners=[];
	$scope.track={};
	//alert(edit);
	
	genres.getgenres().then(function(response){
		
		$scope.geners=response.data;
	})

	
	
	$scope.addtrack=function()
	{
		var data=JSON.stringify($scope.track);
		tracks.addtracks(data).then(function(){
			$scope.answer();
		
		});
		
		
	};
	$scope.cancel=function()
	{
		$scope.answer();
	}
	
	
		
		
	
  
  $scope.answer = function() {
    $mdDialog.hide();
  };
});