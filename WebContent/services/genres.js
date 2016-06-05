/*angular.module('StarterApp').factory('genres', function($http) {
    return {
        getgenres: function() {
           return $http.get("http://104.197.128.152:8000/v1/genres")
                      
            
        },
        editgenres: function(id) {
        
        
        return $http.get("http://104.197.128.152:8000/v1/genres/"+id)
        
        },
        editupdategenres: function(id,genres)
        {
        
        return $http.post("http://104.197.128.152:8000/v1/genres/"+id,genres)
        
        },
        addgenres: function(genres)
        {
         
          return $http.post("http://104.197.128.152:8000/v1/genres",genres)
        
        }
    };
});*/
angular.module('StarterApp').factory('genres', ['$resource', function ($resource) {
    return $resource('http://104.197.128.152:8000/v1/genres/:id',
    		{id: '@id'}
    
    
    
    );
}]);