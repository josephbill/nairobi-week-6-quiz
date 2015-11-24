



//interacting with json data
myApp.controller('myCat' ,function($scope,$http)
   {
    var url = "http://jsonplaceholder.typicode.com/posts/1/comments";
      //get takes the url if successful a callback function  .success(function(response)) is run
      //response gets data from the url
              $http.GET(url).success(function(response) 
              {
               $scope.posts = response; 

               });

 