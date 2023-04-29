import { Component, OnInit } from '@angular/core';
import quizzQuestions from '../../../assets/data/quizz_questions.json'

@Component({
  selector: 'app-quizz',
  templateUrl: './quizz.component.html',
  styleUrls: ['./quizz.component.css']
})
export class QuizzComponent implements OnInit {
  public title: string = 'Título'
  public question: any
  public questionSelected: any
  public answers: string[] = []
  public answersSelected: string = ''
  public questionIndex: number = 0
  public questionMaxIndex: number = 0
  public finished: boolean = false

  constructor() {}
  
  ngOnInit(): void {
    if(quizzQuestions) {
      this.finished = false
      this.title = quizzQuestions.title

      this.question = quizzQuestions.questions
      this.questionSelected = this.question[this.questionIndex]

      this.questionIndex = 0
      this.questionMaxIndex = this.question.length

    }    
  }

  playerChoose(response: string) {
    this.answers.push(response)
    this.nextStep()
  }

  async nextStep() {
    this.questionIndex ++

    if(this.questionMaxIndex > this.questionIndex) {
      this.questionSelected = this.question[this.questionIndex]
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
