import React from 'react';
import axios from 'axios';
import { fetchQuestions } from '../services/question-api-helper';
import { Link } from 'react-router-dom';

class QuestionsViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: 'css',
      questions: [],
    }
  };

  async componentDidMount() {
    const topic = this.state.topic;
    const questions = await fetchQuestions(topic);
    this.setState({
      questions: questions,
    });
  };

  render() {
    return (
      <div>

        {this.state.questions.map(question => (
          <Link to={`questions/${this.state.topic}/${question.id}`}>
            <div key={question.id}>
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