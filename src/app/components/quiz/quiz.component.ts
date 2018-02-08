import { Component, OnInit } from '@angular/core';
import { QuizService } from '../../_services/quiz.service';
import { Option, Question, Quiz, QuizConfig } from '../../_models/index';
import { Http } from '@angular/http';
@Component({
  selector: 'quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {
   
   
   quizes: any[];
  quiz: Quiz = new Quiz(null);
  mode: string = 'quiz';
  quizName: string;
  config: QuizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,  // if true, it will move to next question automatically when answered.
    'duration': 0,  // indicates the time in which quiz needs to be completed. 0 means unlimited.
    'pageSize': 1,
    'requiredAll': false,  // indicates if you must answer all the questions before submitting.
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
    private jsonFileURL: string = "assets/aspnet.json"; 
    constructor(http: Http) {
		 if (localStorage.getItem("user") !== null){
			 debugger;
			 
			 let item = JSON.parse(localStorage.getItem("user"));
			 
		 }
		 else
		 {
			
		 }
        http.get(this.jsonFileURL).subscribe(result => {
			 debugger;
                //let item = JSON.parse(result.json());
				 let item = result.json();
				 this.quiz = item;
				    this.pager.count = this.quiz.questions.length;
				//let item = this.quizName.name;
			 //this.quiz=this.quizName.name;
				 //is.quizName = this.quiz[0].id;
    
        });
		console.log(this.quiz);
    }
onSelect(question:Question,option: Option) {
	debugger;
    if (question.questionTypeId === 1) {
      question.options.forEach((x) => { if (x.id !== option.id) x.selected = false; });
    }

    if (this.config.autoMove) {
       this.goTo(this.pager.index + 1);
     }
  }
   goTo(index: number) {
	   debugger;
     if (index >= 0 && index < this.pager.count) {
       this.pager.index = index;
       this.mode = 'quiz';
    }
  }

   get filteredQuestions() {
	   debugger;
    return (this.quiz.questions) ?
      this.quiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }


  isCorrect(question: Question) {
	  
    return question.options.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  };
  onSubmit() {
    let answers = [];
    this.quiz.questions.forEach(x => answers.push({ 'QuizId': this.quiz.id, 'QuestionId': x.id, 'Answered': x.answered }));

    // Post your data to the server here. answers contains the questionId and the users' answer.
    console.log(this.quiz.questions);
    this.mode = 'result';
  }
  // ngOnInit() {
	  // this.http.get('https://opentdb.com/api.php?amount=30')
	   // .map(res => res.json()).subscribe(
            // data => {
                // // shuffle questions
               // this.quiz = data;
            // },
            // err => console.error(err)
            // )
	   // // this.http.get('https://opentdb.com/api.php?amount=30').subscribe(result => {
               // // this.quiz = result.json();
        // // });
	
	  
	  
  // }
  

}


