import React from 'react';
import QuestionForm from './QuestionForm';
import { updateQuestion } from '../services/api-helper';


class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formData: {
        topic: this.props.topic,
        title: this.props.question.title,
        question: this.props.question.question
      },
      isEdit: false
    }
  }

  handleUpdateClick = () => {
    this.setState({
      isEdit: true
    })
  }

  handleDeleteClick = () => {

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
    const topic = this.state.formData.topic;
    const id = this.props.question.id;
    const question = this.state.formData;
    const res = await updateQuestion(topic, id, question);
    this.setState({
      isEdit: false,
    })
  }

  render() {
    return (
      (this.state.isEdit
        ?
        <QuestionForm
          formData={this.state.formData}
          isEdit={this.state.isEdit}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        :
        <div>
          <h1>{this.state.formData.title}</h1>
          <p>{this.props.question.user.username}</p>
          <p>{this.state.formData.question}</p>
          <button onClick={this.handleUpdateClick}>edit</button>
          <button>delete</button>
        </div>
      )
    )
  };
}

export default Question;