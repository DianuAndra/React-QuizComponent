import React, { Component } from "react";
import QuizQuestion from "./QuizQuestion";

let quizData = require("./quiz_data.json");

class Quiz extends Component {
  constructor(props) {
    super(props);
    this.state = { quiz_position: 1 };
  }

  // <div className="QuizQuestion">
  //         {
  //           //this.state = { quiz_position: 1, data:quizdata };
  //           // this.state.data.quiz_questions[this.state.quiz_position]
  //           //   .instruction_text

  //           quizData.quiz_questions[0].instruction_text
  //         }
  //       </div>

  render() {
    return (
      <div>
        <QuizQuestion
          // quiz_question={quizData.quiz_questions[0].instruction_text}

          quiz_question={quizData.quiz_questions[this.state.quiz_position - 1]}
        />
      </div>
    );
  }
}

export default Quiz;
