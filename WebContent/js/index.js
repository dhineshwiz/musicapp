var app = angular.module('StarterApp', ['ngMaterial','ngMdIcons','fc.paging','angularUtils.directives.dirPagination','ngMdIcons','ngResource']);

app.controller('AppCtrl', function($scope,$mdBottomSheet, $mdSidenav, 
		$mdDialog, $http, $mdSidenav,$templateCache,$timeout,
		$mdToast,tracks,genres){
	
	$scope.tracks=[];
	$scope.track=[];
	$scope.search={};
	$scope.tab1active=true;
	$scope.tab2active=false;
	$scope.left_function=function()
	{
		$scope.tab1active=false;
		$scope.tab2active=true;
		
	}
	$scope.right_function=function()
	{
		$scope.tab2active=false;
		$scope.tab1active=true;
		
		
	}
	$scope.currentPage=1;
	$scope.toastPosition = angular.extend({},{
      bottom: true,
      top: false,
      left: false,
      right: true
    });
	$scope.back=function()
	{
		$scope.showSearch = !$scope.showSearch;
		$scope.search.title='';
	}
	$scope.close=function()
	{
	 //alert(2);
	 $mdSidenav('menubar').close().then(function () {
          //alert("close LEFT is done");
        });
	}
	//$scope.close();
	$scope.tooglenav1=function()
	{
		//alert(1);
		$mdSidenav('menubar')
          .toggle()
		
		
	};
	$scope.showeditrack=function(event,track_id)
	{
		//alert(track_id);
			   
			   $mdDialog.show({
      controller: 'EditTrackController',
      templateUrl:'templates/AddTracks.html',
	 targetEvent: event,
	  resolve:{
		  id: function()
                	  {

                		  return track_id;

                	  },
		edit:function()
		{
			return 1;
		}		
		  
	  },
	  parent: angular.element(document.body)
    }).then(function(addtrack) {
			          //alert("updated");
			          $scope.initialload();
			          $scope.getgener();
			          
			        }, function(cancel) {
			          //$scope.status = 'You cancelled the dialog.';
			          //alert("canceled");
			        });
		
	}
	$scope.initialload=function()
	{
		/*tracks.gettracks().then(function(response){
			
			$scope.tracks=response.data;
			//alert("inside initial load");
		});*/
		$scope.tracks=tracks.query();
		//alert("inside initial load");
		
                    
	//determining number of pages				
    $scope.noOfPages = Math.ceil($scope.tracks.length/5);
    
    $scope.filter = function() {
        $timeout(function() { 
            
            $scope.noOfPages = Math.ceil($scope.filtered.length/5);
        }, 10);
    };
               
               
		
		
	};
	$scope.getgener=function()
	{
		/*genres.getgenres().then(function(response){
			
			$scope.geners=response.data;
		});*/
		
		$scope.geners= genres.query();
		
		
		
	};
	$scope.initialload();
	$scope.getgener();
	
  $scope.toggleSidenav = function(menuId) {
    $mdSidenav(menuId).toggle();
  };



  $scope.alert = '';
  $scope.showListBottomSheet = function($event,id) {
    $scope.alert = '';
    $mdBottomSheet.show({
      template: '<md-bottom-sheet class="md-list md-has-header"> <md-subheader>Settings</md-subheader> <md-list> <md-item ng-repeat="item in items"><md-item-content md-ink-ripple flex class="inset"> <a flex aria-label="{{item.name}}" ng-click="listItemClick($index,$event)"> <span class="md-inline-list-icon-label">{{ item.name }}</span> </a></md-item-content> </md-item> </md-list></md-bottom-sheet>',
      controller: 'ListBottomSheetCtrl',
	  resolve: {

                	  track_id: function()
                	  {

                		  return id;

                	  }
	  },
      targetEvent: $event
    }).then(function(clickedItem) {
      $scope.alert = clickedItem.name + ' clicked!';
    });
  };
 // var template = $templateCache.get('tem1.html');
 $scope.tab1select= function()
 {
	 $scope.musictrackstab=1;
	 
 };
 $scope.tab1disselect= function()
 {
	  $scope.musictrackstab=0;
 };
 $scope.showEditgener= function(ev,id) {
	  
	  //alert("id is"+id);
    $mdDialog.show({
      controller: 'EditGenreController',
      templateUrl:'templates/AddGenres.html',
      targetEvent: ev,
	  resolve:{
		  id: function()
                	  {

                		  return id;

                	  },
		edit:function()
		{
			return 0;
		}		
		  
	  },
	  parent: angular.element(document.body)
    })
    .then(function() {
      $scope.initialload();
	  $scope.getgener();
	  
    });
  };
   $scope.showAdd_gener = function(ev) {

    $mdDialog.show({
      controller: 'AddGenreController',
      templateUrl:'templates/AddGenres.html',
      targetEvent: ev,
	  resolve:{
		  id: function()
                	  {

                		  return 0;

                	  },
		edit:function()
		{
			return 0;
		}		
		  
	  },
	  parent: angular.element(document.body)
    })
    .then(function() {
      $scope.initialload();
	  $scope.getgener();
	  
    });
  };
  
  $scope.showAdd = function(ev) {
	  $scope.label="Add Track";
    $mdDialog.show({
      controller: 'AddTrackController',
      templateUrl:'templates/AddTracks.html',
      targetEvent: ev,
	  resolve:{
		  id: function()
                	  {

                		  return 0;

                	  },
		edit:function()
		{
			return 0;
		}		
		  
	  },
	  parent: angular.element(document.body)
    })
    .then(function() {
      $scope.initialload();
	  $scope.getgener();
	  //alert("updated");
	  
    });
  };
});

app.filter('startFrom', function() {
    return function(input, start) {
        if(input) {
            start = +start; //parse to int
            return input.slice(start);
        }
        return [];
    }
});


app.controller('ListBottomSheetCtrl', function($scope, $mdBottomSheet,$mdDialog,$http,track_id) {
  $scope.items = [
    { name: 'Delete', icon: 'share' },
    { name: 'Edit', icon: 'upload' },
    { name: 'Share', icon: 'copy' },
  
  ];
    $scope.listItemClick = function($index,event) {
    var clickedItem = $scope.items[$index];
    
	if(clickedItem.name=='Edit')
	{
		   $mdDialog.show({
      controller: DialogController_edit,
      templateUrl:'add_tracks.html',
	 targetEvent: event,
	  resolve:{
		  id: function()
                	  {

                		  return track_id;

                	  },
		edit:function()
		{
			return 1;
		}		
		  
	  },
	  parent: angular.element(document.body)
    })
    .then(function() {
      $scope.initialload();
	  
	  $scope.showSimpleToast = function() {
    $mdToast.show(
      $mdToast.simple()
        .textContent('Music Track added')
        .position($scope.getToastPosition())
        .hideDelay(3000)
    );
  };
	  
    });

   
		
		
		
		//alert(track_id);
	}
	
	//$mdBottomSheet.hide(clickedItem);
  };
});




