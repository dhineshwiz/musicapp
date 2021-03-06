angular.module('StarterApp').directive('trackrecord', function() {
            var directive = {
            		
            };
            directive.restrict= 'EA',
            //directive.template = '<md-item-content><div class="md-tile-left inset" hide-sm><user-avatar></user-avatar></div><div layout="row" class="md-tile-content"><span flex="50"><span>{{ item.title +" [" }}</span><span ng-repeat="it in item.genres">{{it.name}}<span ng-if="!$last">,</span></span> ]</span> <span flex="50" class="star-rating" star-rating rating-value="item.rating"data-max="5" on-rating-selected="rateFunction(rating)"></span></div><md-button aria-label="Open Settings" ng-click="showeditrack($event,item.id)"><ng-md-icon icon="more_vert"></ng-md-icon></md-button></md-item-content>'
           
            directive.scope={
            		item :'=',
            		readonly :'=',
            		onRatingSelected :'&',
            		max : '=',
            		
            		showeditrack :'&'
    				
    				};
           
           directive.templateUrl='directives/tracks.html';
            directive.link=function(scope, elem, attrs)
            {
            	scope.edittrack=function(ev,id)
            	{
            		//alert("this id is"+id);
            		scope.showeditrack({event:scope.ev,
            			id:id});
            		
            	}
            	
            	
            };
            
            return directive;
         });