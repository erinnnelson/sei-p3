import React from 'react';
import axios from ' axios';
import { updateAnswer, deleteAnswer } from '../services/api-helper';


class Answer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit: false,
      formData: {
        answer: this.props.answer.answer
      }
    }
  }

  handleUpdateClick = () => {
    this.setState({

      isEdit: true
    })
  }

  handleDeleteClick = async (e) => {
    e.preventDefault();
    const topic = this.props.topic;
    const questionId = this.props.questionId;
    const answerId = this.props.answer.id;
    await deleteAnswer(topic, questionId, answerId);
  };

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
    const topic = this.props.topic;
    const questionId = this.props.questionId;
    const answerId = this.props.answer.id;
    const answer = this.state.formData;
    const res = await updateAnswer(topic, questionId, answerId, answer);
    this.setState({
      isEdit: false,
    })
  }

  render() {
    return (
      (this.state.isEdit
        ?
        <AnswerForm
          formData={this.state.formData}
          isEdit={this.state.isEdit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        :
        <div>
          <p>{this.props.answer.user.username}</p>
          <p>{this.state.formData.answer}</p>
          {(this.props.user.id === this.props.answer.user_id) && (
            <div>
              <button onClick={this.handleUpdateClick}>edit</button>
              <button onClick={this.handleDeleteClick}>delete</button>
            </div>)
          }
        </div>
      )
    )
  };
}

export default Answer;