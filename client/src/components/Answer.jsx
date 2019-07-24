import React from 'react';
import axios from ' axios';


class Answer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isEdit = false,
      formData: {
        answer: this.props.answer.answer
      }
    }
  }

  handleUpdateClick = () => {
    this.setState({
      isEdit = true
    })
  }

  handleDeleteClick = () => {

  }

  render() {
    return (
      (isEdit
        ?
        <AnswerForm
          formData={this.state.formData}
          isEdit={this.state.isEdit}
        />
        :
        <div>
          <p>{this.props.answer.user.username}</p>
          <p>{this.state.formData.answer}</p>
          <button>edit</button>
          <button>delete</button>
        </div>
      )
    )
  };
}

export default Answer;