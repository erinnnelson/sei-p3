import React from 'react';

const UserForm = (props) => {
  return (
    <div>
      {props.isLogin ?
        <>
          <h3 className="modal-header">Log In</h3>
          <form className="login-form" onSubmit={(e) => {
            e.preventDefault();
            props.handleLoginFormSubmit(props.loginFormData);
          }}>
            <input className="modal-inputs"
              onChange={props.handleLoginFormChange}
              name="username"
              type="text"
              value={props.loginFormData.username}
              placeholder="Username"
            />
            <input className="modal-inputs"
              onChange={props.handleLoginFormChange}
              name="password"
              type="password"
              value={props.loginFormData.password}
              placeholder="Password"
            /><br></br>
            <input className="inside-modal-login"
              type="submit"
              value="tackle"
            />
          </form>
        </>
        :
        <>
          <h3 className="modal-header">Register</h3>
          <form className="reg-form" onSubmit={(e) => {
            e.preventDefault();
            props.handleRegisterFormSubmit(props.registerFormData);
          }}>
            <input className="modal-inputs"
              onChange={props.handleRegisterFormChange}
              name="username"
              type="text"
              value={props.registerFormData.username}
              placeholder="Username"
            />
            <input className="modal-inputs"
              onChange={props.handleRegisterFormChange}
              name="email"
              type="text"
              value={props.registerFormData.email}
              placeholder="Email"
            />
            <input className="modal-inputs"
              onChange={props.handleRegisterFormChange}
              name="password"
              type="password"
              value={props.registerFormData.password}
              placeholder="Password"
            /><br></br>
            <input className="inside-modal-login"
              type="submit"
              value="tackle"
            />
          </form>
        </>
      }
    </div>
  )
}

export default UserForm;