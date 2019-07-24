import React from 'react';
import axios from 'axios';
import { fetchQuestions, createQuestion } from '../services/api-helper';
import { Link } from 'react-router-dom';
import QuestionForm from './QuestionForm';

class TopicQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      questionFormVisible: false,
      questionFormData: {
        title: '',
        question: '',
        topic: this.props.topic,
      }
    }
  };

  async componentDidMount() {
    const topic = this.props.topic;
    const questions = await fetchQuestions(topic);
    console.log(questions);
    this.setState({
      questions: questions,
    });
  };

  showForm = (e) => {
    e.preventDefault();
    this.props.user ?
      this.setState({
        questionFormVisible: true,
      }) :
      this.props.openLoginModal();
  }

  handleQuestionChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      questionFormData: {
        ...prevState.questionFormData,
        [name]: value,
      }
    }));
  };

  handleQuestionSubmit = async (e) => {
    e.preventDefault();
    const res = await createQuestion(this.state.questionFormData);
    this.setState({
      questionFormVisible: false,
      questionFormData: {
        title: '',
        question: '',
        topic: '',
      }
    })
  }

  cancelQuestion = (e) => {
    e.preventDefault();
    this.setState({
      questionFormVisible: false,
      questionFormData: {
        title: '',
        question: '',
        topic: '',
      }
    })
  }

  render() {
    return (
      <div>
        <h2>{this.props.topic}</h2>
        {this.state.questionFormVisible
          ?
          <QuestionForm
            topic={this.props.topic}
            cancel={this.cancelQuestion}
            formData={this.state.questionFormData}
            handleChange={this.handleQuestionChange}
            handleSubmit={this.handleQuestionSubmit}
          />
          :
          <button onClick={this.showForm}>Tackle a Question</button>
        }
        {this.state.questions.map(question => (
          <Link
            key={question.id}
            to={`/questions/${this.props.topic}/${question.id}`}>
            <div >
              <p>{question.title}</p>
              <p>{question.question}</p>
              <p>{question.user.username}</p>
              <hr />
            </div>
          </Link>
        ))}
      </div>
    )
  }
}

export default TopicQuestions;