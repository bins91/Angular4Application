import { Component } from '@angular/core';
import { Http } from '@angular/http';
	

	   
@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public forecasts: WeatherForecast[];

    constructor(http: Http) {
        http.get('https://api.github.com/users').subscribe(result => {
			debugger;
               this.forecasts = result.json();
        });
    }
}
interface WeatherForecast {
    login: string;
	url:string;
	type:string;
}
