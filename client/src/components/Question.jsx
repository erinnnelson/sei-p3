import React from 'react';
import QuestionForm from './QuestionForm';
import { updateQuestion, deleteQuestion } from '../services/api-helper';
import { withRouter } from 'react-router-dom'


class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      question: null,
      formData: {
        topic: '',
        title: '',
        question: ''
      },
      isEdit: false
    }
  }

  componentDidMount() {
    this.setState({
      question: this.props.question,
    })
  }

  handleUpdateClick = () => {
    this.setState({
      isEdit: true
    })
  }

  handleDeleteClick = async (id) => {
    const topic = this.props.topic;
    const questionId = this.props.question.id;
    await deleteQuestion(topic, questionId);
    this.props.history.replace(`/questions/${topic}`)
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

  edit = () => {
    this.setState({
      isEdit: true,
      formData: {
        topic: this.props.topic,
        title: this.props.question.title,
        question: this.props.question.question
      }
    })
  }

  cancel = (e) => {
    e.preventDefault();
    this.setState({
      isEdit: false,
      formData: {
        topic: '',
        title: '',
        question: ''
      }
    })
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const topic = this.state.formData.topic;
    const id = this.props.question.id;
    const question = this.state.formData;
    const updatedQuestion = await updateQuestion(topic, id, question);
    this.setState({
      isEdit: false,
      question: updatedQuestion,
    })
  }

  render() {
    const date = new Date(this.props.question.createdAt)
    return (
      this.state.question &&
      (this.state.isEdit
        ?
        <QuestionForm
          formData={this.state.formData}
          isEdit={this.state.isEdit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          cancel={this.cancel}
        />
        :
        <div className="question-title-card">
          <h2 className="question-title">{this.state.question.title}</h2>
          <p className="question-title-username"><small>{this.props.question.user.username}</small></p>
          <p className="question-title-date">{`${date}`}</p>
          <p>{this.state.question.question}</p>
          {(this.props.user && (this.props.user.id === this.props.question.userId)) && (
            <div>
              <button id="button-id" onClick={this.edit}>Edit</button>
              <button id="button-id" onClick={this.handleDeleteClick}>Delete</button>
            </div>
          )}
        </div>
      )
    )
  };
}

export default withRouter(Question);


{/* <button onClick={() => this.delete(kitten.id)}>Delete kitten</button> */ }