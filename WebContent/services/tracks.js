/*angular.module('StarterApp').factory('tracks', function($http) {
    return {
        gettracks: function() {
           return $http.get("http://104.197.128.152:8000/v1/tracks")
                      
            
        },
        
       edittracks: function(id){
    
    return $http.get("http://104.197.128.152:8000/v1/tracks/"+id)
    },
    edittracksupdate: function(id,track)
    {
    return $http.post("http://104.197.128.152:8000/v1/tracks/"+id,track)
    },
    addtracks: function(track)
    {
    return $http.post("http://104.197.128.152:8000/v1/tracks",track);
    
    }
        
        
    
      
    }
    
    
});*/

angular.module('StarterApp').factory('tracks', ['$resource', function ($resource) {
    return $resource('http://104.197.128.152:8000/v1/tracks/:id',
    		{id: '@id'}
    
    
    
    );
}]);