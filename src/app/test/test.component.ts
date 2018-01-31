import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

import { question }  from '../question';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

	values: Array<question>;

	listD = ['Developer','BA','BI','Other'];

	// model = new question("Soundarya","Open-Logix", this.listD[0]);
	results:any;
	
	submitted = false;
 
  	onSubmit() { this.submitted = true; }

  	constructor(private _data: DataService) {
  		this.values = [];
  		// this._data.results = [];
  	 }
	
	newquestion(name,company,designation) {
		let values = new question(name,company,designation);
		console.log(values);
		this._data.setData(values);

		// this._data.results.subscribe(res => this.results = values);
		// console.log(this._data.results);
			// this.results.push(values);
			//this.results.push("Hello");
	 		this.results = this._data.getData();
			 console.log(this.results);
	}

  ngOnInit() {

  }

}
