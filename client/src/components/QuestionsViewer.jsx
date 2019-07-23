import React from 'react';
import { fetchQuestions } from 'axios';

class QuestionsViewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: 'javascript',
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
          <div key={question.id}>
            <p>{question.title}</p>
            <p>{question.question}</p>
            <p>from: {question.user.username}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default QuestionsViewer;