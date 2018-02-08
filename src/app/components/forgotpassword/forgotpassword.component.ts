import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthenticationService } from '../../_services/index';
@Component({
  selector: 'forgotpassword',
    moduleId: module.id,
  templateUrl: './forgotpassword.component.html'
  
})
export class ForgotpasswordComponent implements OnInit {
constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }
 

  ngOnInit() {
  }

}
