import React from 'react';

const AnswerForm = (props) => {

  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <label htmlFor="answer" value="answer" />
        <input
          type="text"
          name="answer"
          value={props.formData.answer}
          onChange={props.handleChange}
        />
        <input type="submit" value="submit" />
        
      </form>
    </div>
  )
}


export default AnswerForm;