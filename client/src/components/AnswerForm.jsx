import React from 'react';

const AnswerForm = (props) => {

  return (
    <div>
      <form className="answerform-form" onSubmit={props.handleSubmit}>
        <label htmlFor="answer" value="answer" />
        <input id="main-input-tackle-a-question"
          type="text"
          name="answer"
          value={props.formData.answer}
          onChange={props.handleChange}
        />
        <input id="button-id" type="submit" value="submit" />
        <button id="button-id" onClick={props.cancel}>cancel</button>
      </form>
    </div>
  )
}


export default AnswerForm;