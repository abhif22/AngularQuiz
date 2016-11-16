(function () {
    angular.module('quiz').
    factory('DataService', ['$http', function ($http) {
        var QuestionData = {
            setNo: 1
            , numberOfQuestions: 15
        };
        QuestionData.quizQuestions = [
            {
                "quesNo": 1
                , "detail": 'This is Question 1'
                , "options": [
                    {
                        "text": 'Angular'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Javascript'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Jquery'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Node.js'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }, {
                'quesNo': 2
                , 'detail': 'This is Question 2'
                , "options": [
                    {
                        "text": 'Angular'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Javascript'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Jquery'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Node.js'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: 'https://pbs.twimg.com/profile_images/718314968102367232/ypY1GPCQ_400x400.jpg'
                , showImage: true
                , optionSelected: NaN
                , responseStatus: false
            }, {
                'quesNo': 3
                , 'detail': 'This is Question 3'
                , "options": [
                    {
                        "text": 'Angular'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Javascript'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Jquery'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Node.js'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }, {
                'quesNo': 4
                , 'detail': 'This is Question 4'
                , "options": [
                    {
                        "text": 'Angular'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Javascript'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Jquery'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Node.js'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }, {
                'quesNo': 5
                , 'detail': 'This is Question 5'
                , "options": [
                    {
                        "text": 'Angular'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Javascript'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Jquery'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Node.js'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }, {
                'quesNo': 6
                , 'detail': 'This is Question 6'
                , "options": [
                    {
                        "text": 'Angular'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Javascript'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Jquery'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Node.js'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }, {
                'quesNo': 7
                , 'detail': 'This is Question 7'
                , "options": [
                    {
                        "text": 'Angular'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Javascript'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Jquery'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Node.js'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }, {
                'quesNo': 8
                , 'detail': 'This is Question 8'
                , "options": [
                    {
                        "text": 'Angular'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Javascript'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Jquery'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Node.js'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: 'false'
                , optionSelected: NaN
                , responseStatus: false
            }, {
                'quesNo': 9
                , 'detail': 'This is a Different Question 9'
                , "options": [
                    {
                        "text": 'Angular'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Javascript'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Jquery'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Node.js'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }
            , {
                'quesNo': 10
                , 'detail': 'This is Question 10'
                , "options": [
                    {
                        "text": 'Angular'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Javascript'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Jquery'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Node.js'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }, {
                'quesNo': 11
                , 'detail': 'This is Question 11'
                , "options": [
                    {
                        "text": 'Angular'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Javascript'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Jquery'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Node.js'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }, {
                'quesNo': 12
                , 'detail': 'This is Question 12'
                , "options": [
                    {
                        "text": 'Angular'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Javascript'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Jquery'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Node.js'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }, {
                'quesNo': 13
                , 'detail': 'This is Question 13'
                , "options": [
                    {
                        "text": 'Angular'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Javascript'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Jquery'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Node.js'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }, {
                'quesNo': 14
                , 'detail': 'This is Question 14'
                , "options": [
                    {
                        "text": 'Angular'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Javascript'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Jquery'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Node.js'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }, {
                'quesNo': 15
                , 'detail': 'This is Question 15'
                , "options": [
                    {
                        "text": 'Angular'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Javascript'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Jquery'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Node.js'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }
        ];
        return QuestionData;
            }]);
})();