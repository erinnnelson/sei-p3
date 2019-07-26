import React from 'react';
import { updateAnswer } from '../services/api-helper';
import AnswerForm from './AnswerForm';


class Answer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      answer: null,
      isEdit: false,
      formData: {
        answer: '',
      }
    }
  }

  componentDidMount() {
    this.setState({
      answer: this.props.answer,
    })
  }

  handleUpdateClick = () => {
    this.setState({

      isEdit: true
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

  edit = () => {
    this.setState({
      isEdit: true,
      formData: {
        answer: this.props.answer.answer,
      }
    })
  }

  cancel = (e) => {
    e.preventDefault();
    this.setState({
      isEdit: false,
      formData: {
        answer: '',
      }
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const topic = this.props.topic;
    const questionId = this.props.questionId;
    const answerId = this.props.answer.id;
    const answer = this.state.formData;
    const updatedAnswer = await updateAnswer(topic, questionId, answerId, answer);
    this.setState({
      isEdit: false,
      answer: updatedAnswer,
    })
  }

  render() {
    const date = new Date(this.props.answer.createdAt);
    return (
      this.state.answer &&
      (this.state.isEdit
        ?
        <AnswerForm
          formData={this.state.formData}
          isEdit={this.state.isEdit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          cancel={this.cancel}
        />
        :
        <div className="answer-title-card">
          <p><b>{this.props.answer.user.username}</b></p>
          <p className="question-title-date">{`${date}`}</p>
          <p>{this.state.answer.answer}</p>
          {(this.props.user && (this.props.user.id === this.props.answer.userId)) && (
            <div>
              <button id="button-id" onClick={this.edit}>edit</button>
              <button id="button-id" onClick={() => this.props.handleDeleteClick(this.props.topic, this.props.questionId, this.props.answer.id)}>delete</button>
            </div>
          )}

        </div>
      )
    )
  };
}

export default Answer;