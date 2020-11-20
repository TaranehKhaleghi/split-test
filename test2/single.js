Survey.StylesManager.applyTheme("modern");

var surveyJSON = {
    "title": "Employment screening",
    "focusOnFirstError": false,
    "pages": [
     {
      "name": "page1",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question1",
        "title": "What is your relationship with the candidate?",
        "choices": [
         {
          "value": "item1",
          "text": "Manager"
         },
         {
          "value": "item2",
          "text": "Director"
         },
         {
          "value": "item3",
          "text": "Coworker"
         }
        ]
       },
       {
        "type": "radiogroup",
        "name": "question2",
        "title": "Have you ever worked with the candidate on a professional capacity?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ]
       }
      ]
     },
     {
      "name": "page2",
      "elements": [
       {
        "type": "checkbox",
        "name": "question4",
        "title": "In your experience with the candidate, how does he/she handle stress? Conflict? Pressure?",
        "choices": [
         {
          "value": "item1",
          "text": " Try to react to situations rather than to stress"
         },
         {
          "value": "item2",
          "text": "Talk with the other person"
         },
         {
          "value": "item3",
          "text": "Prioritize the areas of conflict"
         }
        ],
        "hasOther": true
       },
       {
        "type": "radiogroup",
        "name": "question9",
        "title": "If you were the hiring manager, would you hire the candidate?",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ]
       }
      ],
      "title": "page2"
     },
     {
      "name": "page3",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question5",
        "title": "Would you trust the candidate with large sums of money, children, or sensitive information? ",
        "choices": [
         {
          "value": "item1",
          "text": "Yes"
         },
         {
          "value": "item2",
          "text": "No"
         }
        ]
       },
       {
        "type": "checkbox",
        "name": "question7",
        "title": "Were there any behaviors that impacted his/her job performance?",
        "choices": [
         {
          "value": "item1",
          "text": "Being late"
         },
         {
          "value": "item2",
          "text": "Missing deadlines"
         },
         {
          "value": "item3",
          "text": "arguing with colleagues"
         }
        ],
        "hasOther": true
       }
      ]
     },
     {
      "name": "page4",
      "elements": [
       {
        "type": "radiogroup",
        "name": "question10",
        "title": "How would you rate the applicant’s job performance?",
        "choices": [
         {
          "value": "item1",
          "text": "1-3"
         },
         {
          "value": "item2",
          "text": "4-6"
         },
         {
          "value": "item3",
          "text": "7-10"
         }
        ]
       },
       {
        "type": "checkbox",
        "name": "question8",
        "title": "Why did he/she leave your company?",
        "choices": [
         {
          "value": "item1",
          "text": "looking for better career prospects"
         },
         {
          "value": "item2",
          "text": "Office politics"
         },
         {
          "value": "item3",
          "text": "More salary"
         }
        ],
        "hasOther": true,
        "hasSelectAll": true
       }
      ]
     },
     {
      "name": "page5",
      "elements": [
       {
        "type": "checkbox",
        "name": "question3",
        "title": "What are some of his/her traits that you believe will make them a strong hire?",
        "choices": [
         {
          "value": "item1",
          "text": "Communication"
         },
         {
          "value": "item2",
          "text": "Teamwork"
         },
         {
          "value": "item3",
          "text": "Analytical Skills"
         },
         {
          "value": "item4",
          "text": "Strong Work Ethic"
         }
        ]
       },
       {
        "type": "text",
        "name": "question6",
        "title": "How does the candidate interact with others?"
       }
      ]
     }
    ],
    "storeOthersAsComment": false
   }

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    JSON.stringify(survey.data);
}

var survey = new Survey.Model(surveyJSON);
$("#surveyContainer").Survey({
    model: survey,
    onComplete: sendDataToServer
});