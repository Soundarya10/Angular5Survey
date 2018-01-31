import { Component, OnInit,OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { DataService } from '../data.service';
import {CanActivate} from "@angular/router";
import * as Survey from 'survey-angular';

Survey.Survey.cssType = "bootstrap";

var surveyJSON = {
 "pages": [
  {
   "name": "page1",
   "elements": [
    {
     "type": "checkbox",
     "name": "question 1",
     "choices": [
      "item1",
      "item2",
      "item3"
     ]
    }
   ]
  },
  {
   "name": "page2",
   "elements": [
    {
     "type": "radiogroup",
     "name": "question2",
     "visible": false,
     "visibleIf": "{question 1}='item1'",
     "choices": [
      "item1",
      "item2",
      "item3"
     ]
    }
   ]
  },
  {
   "name": "page3",
   "elements": [
    {
     "type": "dropdown",
     "name": "question 3",
     "visible": false,
     "visibleIf": "{question 1} = 'item2'",
     "choices": [
      "item1",
      "item2",
      "item3"
     ]
    }
   ]
  },
  {
   "name": "page4",
   "elements": [
    {
     "type": "comment",
     "name": "question 4",
     "visibleIf": "{question2} = 'item2'"
    }
   ]
  }
 ]
}

function sendDataToServer(survey) {
    //send Ajax request to your web server.
    alert("The results are:" + JSON.stringify(survey.data));
}
@Component({ 
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.css']
})
export class QuestionsComponent implements OnInit{

	results:any;
  constructor(private _data: DataService) { 
  	
  };

  ngOnInit() {
  	 var survey = new Survey.Model(surveyJSON);
        survey.onComplete.add(sendDataToServer);
       Survey.SurveyNG.render("surveyElement", { model: survey });
  }
 
  ngOnDestroy() {

  }
}
