import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavMenuComponent } from './components/navmenu/navmenu.component';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { LoginComponent } from './components/login/login.component';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HttpModule } from '@angular/http';
import { ForgotpasswordComponent } from './components/forgotpassword/forgotpassword.component';
import { QuizComponent } from './components/quiz/quiz.component';
@NgModule({
  declarations: [
    AppComponent,
	HomeComponent,
	NavMenuComponent,
	FetchDataComponent,
	LoginComponent,
	ForgotpasswordComponent,
	QuizComponent
  ],
  imports: [
    BrowserModule,
	FormsModule,
	HttpClientModule,
	HttpModule,
	 RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
             { path: 'fetch-data', component: FetchDataComponent },	
             { path: 'logins', component: LoginComponent },
			  { path: 'forgotpassword', component: ForgotpasswordComponent },
			  { path: 'quiz', component: QuizComponent },
            { path: '**', redirectTo: 'home' }
        ])
  ],
 providers: [
        
        AlertService,
        AuthenticationService
       
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
