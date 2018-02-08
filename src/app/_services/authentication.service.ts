import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'
export class User {
  constructor(
    public email: string,
    public password: string) { }
}
 
var users = [
  new User('admin@admin.com','adm9'),
  new User('user1@gmail.com','a23')
];
 

@Injectable()
export class AuthenticationService {
    constructor(private http: HttpClient,private _router: Router) { }

	login(username: string, password: string){
    var authenticatedUser = users.find(u => u.email ===username);
    if (authenticatedUser && authenticatedUser.password === password){
		debugger;
      localStorage.setItem('user', JSON.stringify(authenticatedUser));
           this._router.navigate(['Home']);      
      return true;
    }
    return false;
 
  }
   checkCredentials(){
	   debugger;
    if (localStorage.getItem("user") === null){
        this._router.navigate(['Login']);
    }
   }
    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}