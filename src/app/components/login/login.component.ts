import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService,User } from '../../_services/index';

@Component({
	selector: 'login',
    moduleId: module.id,
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
	
 public user = new User('','');
 public errorMsg = '';
 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
		debugger;
		// this.loading = true;
		// var authenticatedUser = this.users.find(u => u.username === this.model.username);
    // if (authenticatedUser && authenticatedUser.password === this.model.password){
      // localStorage.setItem("user", authenticatedUser);
      // this.router.navigate(['Home']);      
      // return true;
    // }
    // return false;
	 if(!this.authenticationService.login(this.model.username,this.model.password)){
              this.errorMsg = 'Failed to login';
        }
         // this.loading = true;
         // if(this.authenticationService.login(this.model.username, this.model.password))
              // .subscribe(
                  // data => {
                    // // // this.router.navigate([this.returnUrl]);
                 // },
                 // error => {
                      // this.alertService.error(error);
                    // this.loading = false;
                 // });
    }
}
