import React from 'react';
import QuestionForm from './QuestionForm';


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

  render() {
    return (
      (this.state.isEdit
        ?
        <QuestionForm
          formData={this.state.formData}
          isEdit={this.state.isEdit}
        />
        :
        <div>
          <h1>{this.state.formData.title}</h1>
          <p>{this.props.question.user.username}</p>
          <p>{this.state.formData.question}</p>
          <button>edit</button>
          <button>delete</button>
        </div>
      )
    )
  };
}

export default Question;