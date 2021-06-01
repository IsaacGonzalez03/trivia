import { ProxyState } from "../AppState.js"
import { triviaService } from "../Services/TriviaService.js"


function drawQuestions() {
  console.log('drawquestions')
  let template = ''
  ProxyState.questions.forEach(q => template += q.Template)
  //this is iterating through each question. lets just draw the active question and set that template

  document.getElementById('questions').innerHTML = template

}

export class QuestionsController {
  constructor() {
    ProxyState.on('questions', drawQuestions)
    drawQuestions()
  }
  getQuestions() {
    try {
      triviaService.getQuestions()
    } catch (error) {
      alert(error.message)
    }
  }
}

//in app state set question index - set an active question - then create button back and forward

//we need to make a new question function - getactivequestion() and be able to iterate through the dataset with buttons

//possibly assign the array numbers and increment when moving through the array

//in models create an active template for the question that youre on

//use filter array property to be able to go through questions then when the array is empty end game

