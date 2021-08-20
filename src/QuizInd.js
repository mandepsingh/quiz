import React, { Component } from 'react';
import { render } from 'react-dom';
import QuizAp from './QuizAp.js';
// import './style.css';

class QuizInd extends Component {
  constructor() {
    super();
    this.state = {
      quiz: [
        {
          question: "Who is the writer of Godan?",
          options: ["Dhanpat Rai Kapoor", "Sheera Prabahkar", "Premchand", "Dayanand"],
          answer: "3"
        },{
          question: " 'Culture and Anarchy' was written by",
          options: ["Raymond Williams", "F. R. Leavis", "Mathew Arnold", "Lionel Trilling"],
          answer: "3"
        },{
          question: "The Romantic Age was the age of?",
          options: ["Epic", "Drama", "Prose Fiction", "Lyric"],
          answer: "1"
        },{
          question: "Pozzo is a character in",
          options: ["Mother Courage", "Endgame", "Look Back in Anger", "Waiting for Godot"],
          answer: "4"
        },{
          question: "Who wrote the Life of Byron?",
          options: ["Robert Southey", "Thomas Moore", "Samuel Rogers", "Thomas Compbell"],
          answer: "2"
        },{
          question: "Who is credited with the coinage of the phrase 'lost generation'?",
          options: ["Gertrude Stein", "Ernest Hemingway", "Scott Fitzgerald", "Willa Cather"],
          answer: "1"
        },{
          question: "Scholar Gypsy of Arnold is largely based on",
          options: ["Clough", "Wordsworth", "Chaucer", "Spenser"],
          answer: "2"
        }
      ]
    };
  }

  render() {
    return (
      <div>
        <QuizAp quiz={this.state.quiz}/>
      </div>
    );
  }
}

export default QuizInd;
