import React from 'react';
import { fetchQuestion } from '../services/api-helper';
import Question from './Question';
import Answer from './Answer';


class QuestionMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: null,
    }
  }

  componentDidMount = async () => {
    const question = await fetchQuestion(this.props.topic, this.props.id)
    this.setState({
      question: question
    });
    console.log(question);
  }

  render() {
    return (
      <div>
        {this.state.question &&
          (<div>
            <Question
              question={this.state.question}
              topic={this.state.question.topic}
            />
            {this.state.question.answers.map(answer => (
              <div key={answer.id}>
                <Answer answer={answer} />
              </div>
            ))}
          </div>)
        }
      </div>
    )
  }
}

export default QuestionMain;