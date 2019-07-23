import React from 'react';
import axios from ' axios';


class QuestionPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit = false,
      formData: {
        topic: this.props.topic,
        title: this.props.question.title,
        question: this.props.question.question
      }
    }
  }

  render() {
    return (
      (isEdit ? <QuestionForm formData={this.state.formData} /> : null)
  
      <div>
        <h1>{this.state.formData.title}</h1>
        <p>{this.props.question.user.username}</p>
        <p>{this.state.formData.question}</p>
      </div>
    )
  };
}