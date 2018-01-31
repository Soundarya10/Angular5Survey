import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { DataService } from './data.service';

@Injectable()
export class AuthGuard implements CanActivate {
	 constructor(private userService: DataService) {}; 
		canActivate(){
		console.log("OnlyLoggedInUsers");
		    if (this.userService.isLoggedIn()) { 
		      return true;
		    } else {
		      window.alert("You don't have permission to view this page"); 
		      return false;
		    }
	}
}