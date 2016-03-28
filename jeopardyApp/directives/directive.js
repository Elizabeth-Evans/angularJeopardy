angular
  .module('jeopardy')
  .directive('jeopardyReader', function() {
    return {
      templateUrl: '../../jeopardyApp/templates/jeopardy-reader.html',
      restrict: 'E',
      scope: {
        question: '='
      },
    }
  })
