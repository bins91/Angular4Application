import { Injectable } from "@angular/core";
import { Http } from "@angular/http";
import 'rxjs/add/operator/map'
import { Observable } from 'rxjs/Rx';

@Injectable()
export class QuizService {
    constructor(private http: Http) {
    }
get(url: string) {
    return this.http.get(url).map(res => res.text().length > 0 ? res.json() : null);
  }
    getQuestion() {
        return this.http.get("https://opentdb.com/api.php?amount=30")
            .map(res => res.json()).subscribe(
            data => {
                // shuffle questions
                for (var i = 0; i < data.results.length - 1; i++) {
                    var j = i + Math.floor(Math.random() * (data.results.length - i));

                    var temp = data.results[j];
                    data[j] = data.results[i];
                   
                    data[j].incorrect_answers.push(data[j].correct_answer)
                   
                    data[i] = temp;
                }
                localStorage.setItem("q", JSON.stringify(data))
                localStorage.setItem("qNumber", JSON.stringify(data.length))
            },
            err => console.error(err)
            )
       
    }




}