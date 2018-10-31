angular.module('flapperNews')
.factory('posts', [
'$http',
function($http){
  var o= {
    posts: []
  };

  o.get = function(id) {
    return $http.get('/posts/' + id + '.json').then(function(res){
      return res.data;
    });
  }

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


  o.create = function(post) {
    return $http.post('/posts.json', post).then(function(data){
      o.posts.push(post);
    });
  };

  o.upvote = function(post) {
    return $http.put('/posts/' + post.id + '/upvote.json')
      .then(function(data){
        post.upvotes += 1;
      });
  };

  o.addComment = function(id, comment) {
    return $http.post('/posts/' + id + '/comments.json', comment);
  };

  o.upvoteComment = function(post, comment) {
    return $http.put('/posts' + id + '/comments/' + comment.id + 'upvote.json')
      .then(function(data){
        comment.upvotes +=1;
      });
  };

  return o;
}]);
