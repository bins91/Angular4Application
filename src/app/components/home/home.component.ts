import { Component } from '@angular/core';
import { AlertService, AuthenticationService,User } from '../../_services/index';
@Component({
    selector: 'home',
    templateUrl: './home.component.html'
})
export class HomeComponent {
	  public user:'';
	  public email:'';
	constructor(
        private _service:AuthenticationService){}
 
    ngOnInit(){
		debugger;
        this._service.checkCredentials();
		 if (localStorage.getItem("user") !== null){
			 this.user=localStorage.user[0].email;
			 let item = JSON.parse(localStorage.getItem("user"));
			 this.email=item.email;
		 }
		 else
		 {
			
		 }
			
			
    }
 
    logout() {
        this._service.logout();
    }
}
