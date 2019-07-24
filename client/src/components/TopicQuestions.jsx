import React from 'react';
import axios from 'axios';
import { fetchQuestions, createQuestion } from '../services/api-helper';
import { Link } from 'react-router-dom';
import QuestionsForm from './QuestionForm';

class TopicQuestions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      formVisible: false,
      formData: {
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

  handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createQuestion(this.state.formData);
    this.setState({
      formVisible: false,
    })
  }

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
        <h2>{this.props.topic}</h2>
        {this.state.formVisible ?
          <QuestionsForm
            topic={this.props.topic}
            cancel={this.cancel}
            formData={this.state.formData}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
          /> :
          <button onClick={this.showForm}>Tackle a Question</button>}
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