import React from 'react';
import { fetchQuestion } from './services/question-api-helper';
import Question from './Question';
import Answer from './Answer';


class QuestionPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: null,
      answerFormData: {
        answer: '',
      }
    }
  }

  componentDidMount = async () => {
    const question = await fetchQuestion(this.props.topic, this.props.question_id)
    this.setState({
      question: question
    });
  }

  render() {
    return (
      <div>
        <Question
          question={this.state.question}
          topic={this.props.topic}
        />
        this.state.question.answers.map(answer => (
        <Answer answer={answer} />
      </div>
    )
  };
}

export default QuestionPage;