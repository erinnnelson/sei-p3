import React from 'react';
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
    debugger;
    const topic = this.props.topic;
    const questions = await fetchQuestions(topic);
    console.log(questions);
    this.setState({
      questions: questions,
    })
  };

  showForm = () => {
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
    }))
  };

  handleQuestionSubmit = async (e) => {
    e.preventDefault();
    const newQuestion = await createQuestion(this.state.questionFormData);
    this.setState(prevState => ({
      questions: [...prevState.questions, newQuestion],
      questionFormVisible: false,
      questionFormData: {
        title: '',
        question: '',
        topic: '',
      }
    }))
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
        <h2 className="topic-title">{this.props.topic}</h2>
        <p className="topic-subtitle">questions</p>
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
          <button id="button-id" onClick={this.showForm}>Tackle a Question</button>
        }
        {this.state.questions.slice(0).reverse().map(question => (
          <Link
            key={question.id}
            to={`/questions/${this.props.topic}/${question.id}`}>
            <div className="question-title-card">
              <p className="question-title">{question.title}</p>
              <p className="question-title-username">submitted by {question.user.username}</p>
            </div>
          </Link>
        ))}
      </div>
    )
  };
}

export default TopicQuestions;