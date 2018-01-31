import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class DataService {

	private subject ;

  	constructor() {
 
   }


  isLoggedIn(): boolean {
    return false;
  }


    setData(x) {
    	this.subject = x;
    }

   getData() {
   	
   	return this.subject;
   }
}
