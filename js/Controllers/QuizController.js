(function () {
    angular.module('quiz').controller('QuizController', ['$scope', 'DataService', function ($scope, DataService) {
        $scope.timer = 60.00;
        $scope.percentAnswered = 0;
        $scope.quesActive = 0;
        $scope.Questions = DataService.quizQuestions;
        $scope.notAnswered = $scope.Questions.length;
        $scope.totalQuestions = $scope.Questions.length;
        $scope.clearResponse = () => {
            $('.Q' + $scope.Questions[$scope.quesActive].quesNo).children('input').prop('checked', false);
            $scope.Questions[$scope.quesActive].responseStatus = false;
            $scope.notAnswered++;
            $scope.percentAnswered = ($scope.totalQuestions - $scope.notAnswered) / $scope.totalQuestions * 100;
        };
        $scope.markAnswer = (idx) => {
            if ($scope.Questions[$scope.quesActive].responseStatus == false) {
                $scope.Questions[$scope.quesActive].optionSelected = idx;
                $scope.Questions[$scope.quesActive].responseStatus = true;
                $scope.notAnswered--;
                $scope.percentAnswered = ($scope.totalQuestions - $scope.notAnswered) / $scope.totalQuestions * 100;
            }
            else {
                $scope.Questions[$scope.quesActive].optionSelected = idx;
                //DOM Manipulation
                $(".Q" + $scope.Questions[$scope.quesActive].quesNo).children("Q" + $scope.Questions[$scope.quesActive].quesNo + "option" + idx).prop('checked', false);
            }
            console.log($scope.Questions[$scope.quesActive].responseStatus);
            console.log($scope.Questions[$scope.quesActive].optionSelected);
        };
        $scope.clearSelection = (elem) => {};
        $scope.switchQuesFromPallette = function (idx) {
            $scope.quesActive = idx;
        }
        $scope.calcPercentAnswered = function () {
                $scope.Questions.forEach(function (elem) {
                    if (elem.responseStatus) $scope.percentAnswered++;
                    console.log($scope.percentAnswered);
                });
            } //calcPercentAnswered ends
        $scope.switchQues = (idx) => {
            console.log(idx);
            $scope.quesActive = idx - 1;
        };
        $scope.continue = () => {
            var flag = false;
            while (!flag && $scope.notAnswered > 0) {
                if ($scope.quesActive == $scope.Questions.length - 1) $scope.quesActive = 0;
                else $scope.quesActive++;
                if ($scope.Questions[$scope.quesActive].responseStatus == false) flag = true;
            }
            if ($scope.notAnswered == 0) {
                window.alert('Quiz Finished!');
            }
            console.log("Switched to ques " + ($scope.quesActive + 1));
        };
        $scope.prevQues = () => {
            console.log("Going to Prev Ques");
            if ($scope.quesActive == 0) $scope.quesActive = $scope.Questions.length - 1;
            else $scope.quesActive--;
            console.log("Switched to ques " + ($scope.quesActive + 1));
        };
        $scope.nextQues = () => {
            console.log("Going to Next Ques");
            if ($scope.quesActive == $scope.Questions.length - 1) $scope.quesActive = 0;
            else $scope.quesActive++;
            console.log("Switched to ques " + ($scope.quesActive + 1));
        };
    }]);
})();