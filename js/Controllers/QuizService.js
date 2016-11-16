(function () {
    angular.module('quiz').
    factory('QuizService', ['$http', function ($http) {
        var quizMetrics = {
            quizStatus: false
        };
        quizMetrics.toggleQuizStatus = function (currQuizStatus) {
            quizMetrics.quizStatus = !quizMetrics.quizStatus;
            //            console.log(quizMetrics.quizStatus);
        }
        return quizMetrics;
            }]);
})();