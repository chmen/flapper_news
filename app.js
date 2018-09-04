angular.module('flapperNews', [])
.controller('MainCtrl', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';

  $scope.posts = [
    {title: 'post1',upvotes: 5},
    {title: 'post2',upvotes: 2},
    {title: 'post3',upvotes: 15},
    {title: 'post4',upvotes: 9},
    {title: 'post5',upvotes: 4},
  ];

  $scope.addPost = function(){
    $scope.posts.push({title: $scope.title, upsvotes: 0});
    $scope.title = '';
  };

}]);

