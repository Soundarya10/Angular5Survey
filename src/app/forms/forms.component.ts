import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Form } from '../form';
import { DataService } from '../data.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

	model = new Form('', '', '', '');

	results : any;
	submitted = false;

	onSubmit() {
		this.submitted = true;
		console.log(this.model);
		this._data.setData(this.model);
		this.results = this._data.getData();
			 console.log(this.results);
	}

	newForm() {
		this.model = new Form ('', '', '', '');
		console.log(this.model);

	}

	  constructor(private _data: DataService) { }



  ngOnInit() {
  }

}
