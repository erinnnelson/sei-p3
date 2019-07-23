import React from 'react';
import axios from 'axios';
import { fetchQuestions } from '../services/question-api-helper';
import { Link } from 'react-router-dom';
import QuestionsForm from './QuestionForm';

class QuestionsViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: '',
      questions: [],
      formVisible: false,
      formData: {
        title: '',
        question: '',
        topic: '',
      }
    }
  };

  async componentDidMount() {
    const topic = this.state.topic;
    const questions = await fetchQuestions(topic);
    this.setState({
      questions: questions,
    });
  };

  showForm = (e) => {
    e.preventDefault();
    this.setState({
      formVisible: true,
    })
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      formData: {
        ...prevState.formData,
        [name]: value,
      }
    }));
  };

  cancel = (e) => {
    e.preventDefault();
    this.setState({
      formVisible: false,
      formData: {
        title: '',
        question: '',
        topic: '',
      }
    })
  }

  render() {
    return (
      <div>
        <h2>{this.state.topic}</h2>
        {this.state.formVisible ?
          <QuestionsForm
            topic={this.state.topic}
            cancel={this.cancel}
            formData={this.state.formData}
            handleChange={this.handleChange}
          /> :
          <button onClick={this.showForm}>Tackle a Question</button>}
        {this.state.questions.map(question => (
          <Link
            key={question.id}
            to={`questions/${this.state.topic}/${question.id}`}>
            <div >
              <p>{question.title}</p>
              <p>{question.question}</p>
              <p>from: {question.user.username}</p>
              <hr />
            </div>
          </Link>
        ))}
      </div>
    )
  }
}

export default QuestionsViewer;