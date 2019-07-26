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
        <div className="button-container">
          <input id="button-id" className="form-button" type="submit" value="submit" />
          <button id="button-id" className="form-button" onClick={props.cancel}>cancel</button>
        </div>
      </form>
    </div>
  )
}


export default AnswerForm;