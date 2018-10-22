angular.module('flapperNews')
.factory('posts', [
'$http',
function($http){
  var o= {
    posts: []
  };

  o.getAll = function() {
    $http({
      method: 'GET',
      url: '/posts.json'
    }).then(function(response){
        angular.copy(response.data, o.posts);
      }, function(error){
        console.log("mighty error accure")
      });

  };

  return o;
}]);
