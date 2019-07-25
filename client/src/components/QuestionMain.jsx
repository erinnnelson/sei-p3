import React from 'react';
import { fetchQuestion, createAnswer, deleteAnswer } from '../services/api-helper';
import Question from './Question';
import AnswerForm from './AnswerForm';
import Answer from './Answer';


class QuestionMain extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      question: null,
      answers: [],
      answerFormVisible: false,
      answerFormData: {
        answer: ''
      }
    }
  }

  handleDeleteAnswer = async (topic, questionId, answerId) => {
    await deleteAnswer(topic, questionId, answerId);
    this.setState(prevState => ({
      answers: prevState.answers.filter(answer => (answer.id !== answerId))
    }))
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
    const newAnswer = await createAnswer(this.state.question.topic, this.state.question.id, this.state.answerFormData);
    this.setState(prevState => ({
      answers: [...prevState.answers, newAnswer],
      answerFormVisible: false,
      answerFormData: {
        answer: ''
      }
    }))
  }

  showAnswerForm = () => {
    this.props.user ?
      this.setState({
        answerFormVisible: true,
      }) :
      this.props.openLoginModal();
  }

  cancelAnswer = () => {
    this.setState({
      formVisible: false,
      formData: {
        answer: ''
      }
    });
  }

  componentDidMount = async () => {
    const question = await fetchQuestion(this.props.topic, this.props.id)
    console.log(question);
    this.setState({
      question: question,
      answers: question.answers
    });
  }

  render() {
    return (
      <div>
        {this.state.question &&
          (<div>
            <Question
              question={this.state.question}
              topic={this.state.question.topic}
              user={this.props.user}
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
            {this.state.answers.slice(0).reverse().map(answer => (
              <div key={answer.id}>
                <Answer
                  answer={answer}
                  handleDeleteClick={this.handleDeleteAnswer}
                  user={this.props.user}
                />
              </div>
            ))}
          </div>)
        }
      </div>
    )
  };
}

export default QuestionMain;