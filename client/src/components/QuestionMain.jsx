import React from 'react';
import { fetchQuestion, createAnswer } from '../services/api-helper';
import Question from './Question';
import AnswerForm from './AnswerForm';
import Answer from './Answer';


class QuestionMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: null,
      answerFormVisible: false,
      answerFormData: {
        answer: ''
      }
    }
  }

  handleAnswerChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      answerFormData: {
        ...prevState.answerFormData,
        [name]: value,
      }
    }));
  };

  handleAnswerSubmit = async (e) => {
    e.preventDefault();
    await createAnswer(this.state.question.topic, this.state.question.id, this.state.answerFormData);
    this.setState({
      answerFormVisible: false,
      answerFormData: {
        answer: ''
      }
    })
  }

  showAnswerForm = () => {
    this.setState({
      answerFormVisible: true,
    })
  }

  cancelAnswer = () => {
    this.setState({
      formVisible: false,
      formData: {
        answer: ''
      }
    })
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
            {this.state.answerFormVisible
              ?
              <AnswerForm
                cancel={this.cancelAnswer}
                formData={this.state.answerFormData}
                handleChange={this.handleAnswerChange}
                handleSubmit={this.handleAnswerSubmit}
              />
              :
              <button onClick={this.showAnswerForm}>Tackle an Answer</button>
            }
            {this.state.question.answers.slice(0).reverse().map(answer => (
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