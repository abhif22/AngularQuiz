(function () {
    angular.module('quiz').controller('QuizController', ['$scope', 'DataService', function ($scope, DataService) {
        $scope.data = DataService;
        $scope.timer = DataService.quizDuration;
        $scope.sectionalPercentAnswered = 0;
        $scope.overallPercentAnswered = 0;
        $scope.quesActive = 0;
        $scope.activeSection = 0;
        var prevSection = 0;
        $scope.sections = DataService.sections;
        $scope.Questions = DataService.sections[$scope.activeSection].questions;
        $scope.sectionalNotAnswered = $scope.Questions.length;
        $scope.sectionalTotalQuestions = DataService.sections[$scope.activeSection].sectionLength;
        $scope.totalQuizQuestions = DataService.numberOfQuestions;
        //Initialize quesActive to 0 for all Sections
        $scope.sections.forEach((section) => {
            section.quesActive = 0;
        });
        $('.collapsible').collapsible();
        $scope.changeSection = (idx) => {
            //Save Previous Section
            prevSection = $scope.activeSection;
            //Save the Last Active Question for Previous Section
            $scope.sections[prevSection].quesActive = $scope.quesActive;
            $scope.activeSection = idx;
            //Set quesActive to last quesActive for Selected Section
            $scope.quesActive = $scope.sections[$scope.activeSection].quesActive;
            console.log('changed to ' + $scope.sections[idx].sectionTitle);
        };
        $scope.clearResponse = () => {
            $('.Q' + $scope.sections[$scope.activeSection].questions[$scope.quesActive].quesNo).children('input').prop('checked', false);
            $scope.sections[$scope.activeSection].questions[$scope.quesActive].responseStatus = false;
            //Update answered questions count
            $scope.sections[$scope.activeSection].answered--;
        };
        $scope.markAnswer = (idx) => {
            if ($scope.sections[$scope.activeSection].questions[$scope.quesActive].responseStatus == false) {
                $scope.sections[$scope.activeSection].questions[$scope.quesActive].optionSelected = idx;
                $scope.sections[$scope.activeSection].questions[$scope.quesActive].responseStatus = true;
                //Update the Progress Bar Area
            }
            else {
                $scope.sections[$scope.activeSection].questions[$scope.quesActive].optionSelected = idx;
                /*//DOM Manipulation
                $(".Q" + $scope.sections[$scope.activeSection].questions[$scope.quesActive].quesNo).children("Q" + $scope.sections[$scope.activeSection].questions[$scope.quesActive].quesNo + "option" + idx).prop('checked', false);*/
            }
            //Update the answered questions count
            $scope.sections[$scope.activeSection].answered++;
            console.log($scope.sections[$scope.activeSection].questions[$scope.quesActive].responseStatus);
            console.log($scope.sections[$scope.activeSection].questions[$scope.quesActive].optionSelected);
        };
        /*      $scope.switchQuesFromPallette = function (idx) {
                  $scope.quesActive = idx;
              }*/
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
            while (!flag && $scope.sections[$scope.activeSection].answered != $scope.sections[$scope.activeSection].sectionLength) {
                if ($scope.quesActive == $scope.sections[$scope.activeSection].questions.length - 1) $scope.quesActive = 0;
                else $scope.quesActive++;
                if ($scope.sections[$scope.activeSection].questions[$scope.quesActive].responseStatus == false) flag = true;
            }
            if ($scope.sections[$scope.activeSection].answered == $scope.sections[$scope.activeSection].sectionLength) {
                window.alert('All Questions from this Section have been Answered!!');
            }
            console.log("Switched to ques " + ($scope.quesActive + 1));
        };
        $scope.prevQues = () => {
            console.log("Going to Prev Ques");
            if ($scope.quesActive == 0) $scope.quesActive = $scope.sections[$scope.activeSection].questions.length - 1;
            else $scope.quesActive--;
            console.log("Switched to ques " + ($scope.quesActive + 1));
        };
        $scope.nextQues = () => {
            console.log("Going to Next Ques");
            if ($scope.quesActive == $scope.sections[$scope.activeSection].questions.length - 1) $scope.quesActive = 0;
            else $scope.quesActive++;
            console.log("Switched to ques " + ($scope.quesActive + 1));
        };
    }]).directive("questionPallette", function () {
        return {
            restrict: 'A'
            , templateUrl: 'views/ques-pallette.html'
            , compile: function (elem, attr) {
                return {
                    post: function (scope, elements, attributes) {
                        console.log('Initialized!');
                        $(elements).collapsible({
                            accordion: true
                        });
                    }
                };
            }
        };
    }).directive('whenReady', ['$interpolate', function ($interpolate) {
        return {
            restrict: 'A'
            , priority: Number.MIN_SAFE_INTEGER, // execute last, after all other directives if any.
            link: function ($scope, $element, $attributes) {
                var expressions = $attributes.whenReady.split(';');
                var waitForInterpolation = false;
                var hasReadyCheckExpression = false;

                function evalExpressions(expressions) {
                    expressions.forEach(function (expression) {
                        $scope.$eval(expression);
                    });
                }
                if ($attributes.whenReady.trim().length === 0) {
                    return;
                }
                if ($attributes.waitForInterpolation && $scope.$eval($attributes.waitForInterpolation)) {
                    waitForInterpolation = true;
                }
                if ($attributes.readyCheck) {
                    hasReadyCheckExpression = true;
                }
                if (waitForInterpolation || hasReadyCheckExpression) {
                    requestAnimationFrame(function checkIfReady() {
                        var isInterpolated = false;
                        var isReadyCheckTrue = false;
                        if (waitForInterpolation && $element.text().indexOf($interpolate.startSymbol()) >= 0) { // if the text still has {{placeholders}}
                            isInterpolated = false;
                        }
                        else {
                            isInterpolated = true;
                        }
                        if (hasReadyCheckExpression && !$scope.$eval($attributes.readyCheck)) { // if the ready check expression returns false
                            isReadyCheckTrue = false;
                        }
                        else {
                            isReadyCheckTrue = true;
                        }
                        if (isInterpolated && isReadyCheckTrue) {
                            evalExpressions(expressions);
                        }
                        else {
                            requestAnimationFrame(checkIfReady);
                        }
                    });
                }
                else {
                    evalExpressions(expressions);
                }
            }
        };
}]);
})();