import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

results:any;
  constructor(private _data: DataService) { 
 
}

  ngOnInit() {
  		this.results = this._data.getData();
			 console.log(this.results);
  }

}
