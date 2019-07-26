import React from 'react';

const QuestionForm = (props) => {
  return (
    <div>
      <form className="main-question-form" onSubmit={props.handleSubmit}>
        <select className="main-question-form-dropdown"
          name="topic"
          value={props.formData.topic}
          onChange={props.handleChange}
        >
          <option name="javascript" value="javascript">JavaScript</option>
          <option name="html" value="html">HTML</option>
          <option name="css" value="css">CSS</option>
          <option name="react" value="react">React</option>
          <option name="express" value="express">Express</option>
          <option name="ruby" value="ruby">Ruby</option>
          <option name="node" value="node">Node</option>
          <option name="sql" value="sql">SQL</option>
        </select>
        <input id="main-question-form-input"
          className="question-form-title"
          type="text"
          name="title"
          value={props.formData.title}
          onChange={props.handleChange}
          placeholder="Title"
        />
        <textarea id="main-input-tackle-a-question"
          name="question"
          cols="1"
          rows="16"
          value={props.formData.question}
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

export default QuestionForm;