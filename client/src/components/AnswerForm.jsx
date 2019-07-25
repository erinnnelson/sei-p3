import React from 'react';

const AnswerForm = (props) => {

  return (
    <div>
      <form className="answerform-form" onSubmit={props.handleSubmit}>
        <label htmlFor="answer" value="answer" />
        <textarea id="main-input-tackle-an-answer"
          name="answer"
          cols="1"
          rows="16"
          value={props.formData.answer}
          onChange={props.handleChange}
        ></textarea>
        <input type="submit" value="submit" />
        <button onClick={props.cancel}>cancel</button>
      </form>
    </div>
  )
}


export default AnswerForm;