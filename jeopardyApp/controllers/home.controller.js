var _ = require('underscore');

angular
  .module('jeopardy')
  .controller('HomeController', function($scope, $http, $q, $location, $rootScope, ApiService, cacheEngine) {
    $rootScope.score = 0;

    if(cacheEngine.get('currentQuestion')){
      // console.log("i am in cache")
      var cache = cacheEngine.get('currentQuestion');
      $scope.categories = cache;
    } else {
      ApiService.getData()
        .then(function(game) {
          // console.log('im puttin shit in cache');
          cacheEngine.put('currentQuestion', game);
          $scope.categories = game;
          $scope.categories.forEach(function(el){
            if(el.data.clues_count > 5){
              el.data.clues = _.first((el.data.clues), 5);
            }
            for(i=0; i<5; i++){
              el.data.clues[i].value = 200 * (i + 1);
              // Note: Kathleen and Frank helped me with this and they got help from Brandon
            }
          })
          // $scope.questions = getQuestions(weesieShutUp);
      });
    }

  });
