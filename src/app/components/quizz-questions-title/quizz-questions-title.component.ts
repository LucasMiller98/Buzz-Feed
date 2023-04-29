import { Component, OnInit } from '@angular/core';
import quizzQuestions from '../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-quizz-questions-title',
  templateUrl: './quizz-questions-title.component.html',
  styleUrls: ['./quizz-questions-title.component.css']
})
export class QuizzQuestionsTitleComponent implements OnInit {
  public questionSelected: any
  // public question: any
  public questionIndex: number = 0
  public questionMaxIndex: number = 0
  public finished: boolean = false
  public answers: string[] = []
  public answersSelected: string = ''

  ngOnInit(): void {
    // console.log(this.question)
    if(quizzQuestions) {
      this.finished = false

      // this.question = quizzQuestions.questions

      this.questionIndex = 0
      // this.questionMaxIndex = this.question.length
    }    
  }

  playerChoose(response: string) {
    this.answers.push(response)
    this.nextStep()
  }

  async nextStep() {
    this.questionIndex ++

    if(this.questionMaxIndex > this.questionIndex) {
      // this.questionSelected = this.question[this.questionIndex]
    }else{
      const finalAnswer:string = await this.checkResult(this.answers)
      this.finished = true

      this.answersSelected = quizzQuestions.results[finalAnswer as keyof typeof quizzQuestions.results]
    }
  }

  async checkResult(answers: string[]) {
    const result = answers.reduce((previous, current, index, array) => {
      const arrayFilterPrevious = array.filter(item => item === previous).length
      const arrayFilterCurrent = array.filter(item => item === current).length

      if(arrayFilterPrevious > arrayFilterCurrent) {
        return previous  
      }

      return current
    })

    return result
  }
}
