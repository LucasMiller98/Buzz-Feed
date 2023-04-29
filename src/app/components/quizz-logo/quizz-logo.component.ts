import { Component, OnInit } from '@angular/core';
import quizzQuestions from '../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-quizz-logo',
  templateUrl: './quizz-logo.component.html',
  styleUrls: ['./quizz-logo.component.css']
})
export class QuizzLogoComponent implements OnInit {
  public title: string = ''

  ngOnInit(): void {
    if(quizzQuestions) {
      this.title = quizzQuestions.title
    }
  }
}
