angular
  .module('jeopardy')
  .controller('HomeController', function($scope, $http, $q, $location, ApiService) {



    ApiService.getCategories()
      .then(function(catof1) {
        console.log(catof1);
      });

    ApiService.sixThenShits()
      .then(function(weesieShutUp) {
        console.log('PLEASE', weesieShutUp);
        $scope.categories = weesieShutUp;
        // $scope.questions= getQuestions(weesieShutUp);
        // window.glob = $scope.categories;
        // $scope.newAllValues = $scope.categories.map(function(el){
        //   return el.data
        // }).then(function(data){
        //   $scope.hundred
        // })
    })

    // function getQuestions(data){
    //   var dataArr = [];
    //   for (var i = 0; i < 6; i ++){
    //     dataArr.push(data[1].data.clues[i]);
    //   }
    //   return dataArr
    // }
})
