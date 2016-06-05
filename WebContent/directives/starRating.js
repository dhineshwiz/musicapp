

angular.module('StarterApp').directive('starRating',
	function() {
		return {
			restrict : 'EA',
			//templateUrl:'directives/starRating.html',
			template : '<ul class="rating">'
					 + '	<li ng-repeat="star in stars" ng-class="star" ng-click="toggle($index)">'
					 + '\u2605'
					 + '</li>'
					 + '</ul>',
			scope : {
				ratingValue : '=',
				max : '=',
				readonly:'=',
				onRatingSelected : '&'
			},
			link : function(scope, elem, attrs) {
				
				if(scope.ratingValue ===undefined )
				{
				scope.ratingValue=1;
				
				}
				var updateStars = function() {
					scope.stars = [];
					
					
					
					for ( var i = 0; i < scope.max; i++) {
						
						scope.stars.push({
							filled : i < scope.ratingValue
						});
					}
				};
				
				scope.toggle = function(index) {
					 if (scope.readonly == undefined || scope.readonly === false)
						 
					scope.ratingValue = index + 1;
					scope.onRatingSelected({
						rating : index + 1
					});
				};
				
				
				
				scope.$watch('ratingValue',
					function(oldVal, newVal) {
						if (newVal) {
							updateStars();
						}
					}
				, true);
			}
		};
	}
);
	