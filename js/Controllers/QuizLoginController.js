(function () {
    angular.module('quiz').
    controller('QuizLoginController', ['$scope', 'QuizService', function ($scope, QuizService) {
        //Setting Data Bindings
        $scope.quizMetrics = QuizService;
        $scope.status = QuizService.quizStatus;
        $scope.startQuiz = function () {
            $scope.quizMetrics.toggleQuizStatus();
            //            console.log('Inside Controller' + $scope.quizMetrics.quizStatus);
        }
        $scope.stopQuiz = function () {
            $scope.quizMetrics.toggleQuizStatus();
            //            console.log('Inside Controller' + $scope.quizMetrics.quizStatus);
        }
        }]);
})();