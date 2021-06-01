export class Question {
  constructor(data) {
    this.question = data.question
    this.answer = data.correct_answer
    this.incorrect = data.incorrect_answers
  }
  get Template() {
    return /*html*/ `
    <div>${this.question}</div>
    
    `
  }
}

