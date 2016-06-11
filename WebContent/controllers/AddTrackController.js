angular.module('StarterApp').controller('AddTrackController',
function($scope, $mdDialog, $http,id,edit,tracks,genres) {
	$scope.label="Add Track";
	
	$scope.geners = new genres();
	$scope.geners=genres.query();
	
	
	$scope.track = new tracks();
	//$scope.track.cldid={};
	$scope.track.rating=1;
	//$scope.track.cldid=12345678;
	$scope.addtrack=function()
	{
		
		$scope.track.$save(function(){
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