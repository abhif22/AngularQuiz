(function () {
    angular.module('quiz').
    factory('DataService', ['$http', function ($http) {
        var QuestionData2 = {
            setNo: 1
            , numberOfQuestions: 15
        };
        QuestionData2.quizQuestions = [
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
        var QuestionData = {
            setNo: 1
            , numberOfQuestions: 50
            , noOfSections: 3
            , sections: [

    ]
            , quizDuration: 60
            , answered: 0
        };
        //Section 1
        QuestionData.sections[0] = {};
        QuestionData.sections[0].serialno = 1;
        QuestionData.sections[0].answered = 0;
        QuestionData.sections[0].sectionTitle = 'Numerical Aptitude';
        QuestionData.sections[0].questions = [
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
            }
    , {
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
            }
    , {
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
            }
    , {
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
            }
    , {
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
            }
    , {
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
            }
    , {
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
            }
    , {
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
            }
    , {
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
            }
    , {
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
            }
    , {
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
            }
    , {
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
            }
    , {
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
            }
    , {
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
        QuestionData.sections[0].sectionLength = 15;
        QuestionData.sections[0].sectionAnswered = false;
        //Section 2
        QuestionData.sections[1] = {};
        QuestionData.sections[1].serialno = 2;
        QuestionData.sections[1].answered = 0;
        QuestionData.sections[1].sectionTitle = 'Current Affairs';
        QuestionData.sections[1].questions = [
            {
                "quesNo": 1
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 2
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 3
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 4
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 5
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 6
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 7
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 8
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 9
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 10
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 11
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 12
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 13
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 14
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 15
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 16
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 17
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 18
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 19
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
    , {
                "quesNo": 20
                , "detail": 'Second BRICS Communication Ministers meeting was hosted by which country?'
                , "options": [
                    {
                        "text": 'China'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'South Africa'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'India'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Russia'
                        , "optionNo": 4
                    }
                             ]
                , "imageURL": ''
                , "showImage": false
                , "optionSelected": NaN
                , "responseStatus": false
            }
        ];
        QuestionData.sections[1].sectionLength = 20;
        QuestionData.sections[1].sectionAnswered = false;
        //Section 3
        QuestionData.sections[2] = {};
        QuestionData.sections[2].serialno = 3;
        QuestionData.sections[2].answered = 0;
        QuestionData.sections[2].sectionTitle = 'Domain Knowledge';
        QuestionData.sections[2].questions = [
            {
                'quesNo': 1
                , 'detail': 'Which state has become the first in the India to conduct e-auction of minor mineral?'
                , "options": [
                    {
                        "text": 'Madhya Pradesh'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Bihar'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Chhattisgarh'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Jharkhand'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }
    , {
                'quesNo': 2
                , 'detail': 'Which state has become the first in the India to conduct e-auction of minor mineral?'
                , "options": [
                    {
                        "text": 'Madhya Pradesh'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Bihar'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Chhattisgarh'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Jharkhand'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }
    , {
                'quesNo': 3
                , 'detail': 'Which state has become the first in the India to conduct e-auction of minor mineral?'
                , "options": [
                    {
                        "text": 'Madhya Pradesh'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Bihar'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Chhattisgarh'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Jharkhand'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }
    , {
                'quesNo': 4
                , 'detail': 'Which state has become the first in the India to conduct e-auction of minor mineral?'
                , "options": [
                    {
                        "text": 'Madhya Pradesh'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Bihar'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Chhattisgarh'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Jharkhand'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }
    , {
                'quesNo': 5
                , 'detail': 'Which state has become the first in the India to conduct e-auction of minor mineral?'
                , "options": [
                    {
                        "text": 'Madhya Pradesh'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Bihar'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Chhattisgarh'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Jharkhand'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }
    , {
                'quesNo': 6
                , 'detail': 'Which state has become the first in the India to conduct e-auction of minor mineral?'
                , "options": [
                    {
                        "text": 'Madhya Pradesh'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Bihar'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Chhattisgarh'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Jharkhand'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }
    , {
                'quesNo': 7
                , 'detail': 'Which state has become the first in the India to conduct e-auction of minor mineral?'
                , "options": [
                    {
                        "text": 'Madhya Pradesh'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Bihar'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Chhattisgarh'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Jharkhand'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }
    , {
                'quesNo': 8
                , 'detail': 'Which state has become the first in the India to conduct e-auction of minor mineral?'
                , "options": [
                    {
                        "text": 'Madhya Pradesh'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Bihar'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Chhattisgarh'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Jharkhand'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }
    , {
                'quesNo': 9
                , 'detail': 'Which state has become the first in the India to conduct e-auction of minor mineral?'
                , "options": [
                    {
                        "text": 'Madhya Pradesh'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Bihar'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Chhattisgarh'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Jharkhand'
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
                , 'detail': 'Which state has become the first in the India to conduct e-auction of minor mineral?'
                , "options": [
                    {
                        "text": 'Madhya Pradesh'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Bihar'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Chhattisgarh'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Jharkhand'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }
    , {
                'quesNo': 11
                , 'detail': 'Which state has become the first in the India to conduct e-auction of minor mineral?'
                , "options": [
                    {
                        "text": 'Madhya Pradesh'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Bihar'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Chhattisgarh'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Jharkhand'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }
    , {
                'quesNo': 12
                , 'detail': 'Which state has become the first in the India to conduct e-auction of minor mineral?'
                , "options": [
                    {
                        "text": 'Madhya Pradesh'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Bihar'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Chhattisgarh'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Jharkhand'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }
    , {
                'quesNo': 13
                , 'detail': 'Which state has become the first in the India to conduct e-auction of minor mineral?'
                , "options": [
                    {
                        "text": 'Madhya Pradesh'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Bihar'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Chhattisgarh'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Jharkhand'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }
    , {
                'quesNo': 14
                , 'detail': 'Which state has become the first in the India to conduct e-auction of minor mineral?'
                , "options": [
                    {
                        "text": 'Madhya Pradesh'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Bihar'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Chhattisgarh'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Jharkhand'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }
    , {
                'quesNo': 15
                , 'detail': 'Which state has become the first in the India to conduct e-auction of minor mineral?'
                , "options": [
                    {
                        "text": 'Madhya Pradesh'
                        , "optionNo": 1
                    }
                    , {
                        "text": 'Bihar'
                        , "optionNo": 2
                    }
                    , {
                        "text": 'Chhattisgarh'
                        , "optionNo": 3
                    }
                    , {
                        "text": 'Jharkhand'
                        , "optionNo": 4
                    }
                             ]
                , imageURL: ''
                , showImage: false
                , optionSelected: NaN
                , responseStatus: false
            }
        ];
        QuestionData.sections[2].sectionLength = 15;
        QuestionData.sections[2].sectionAnswered = false;
        return QuestionData;
            }]);
})();