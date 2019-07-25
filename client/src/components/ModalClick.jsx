import React from 'react';
import Modal from 'react-modal';
import UserForm from './UserForm';


class ModalClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      registerFormData: {
        username: '',
        password: '',
        email: ''
      },
      loginFormData: {
        username: '',
        password: ''
      },
    };
  }


  handleLoginFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      loginFormData: {
        ...prevState.loginFormData,
        [name]: value,
      }
    }))
  }

  handleRegisterFormChange = (e) => {
    const { name, value } = e.target;
    this.setState(prevState => ({
      registerFormData: {
        ...prevState.registerFormData,
        [name]: value,
      }
    }))
  }

  render() {
    return (
      <div>
        <button className="log-button" onClick={this.props.openLoginModal}>Log In</button>
        <Modal
          isOpen={this.props.loginModalIsOpen}
          onRequestClose={this.props.closeLoginModal}
          ariaHideApp={false}
        >
          <a onClick={this.props.closeLoginModal}>&times;</a>

          <UserForm
            {...this.props}
            isLogin={true}
            loginFormData={this.state.loginFormData}
            handleLoginFormChange={this.handleLoginFormChange}
          />
        </Modal>

        <button className="reg-button" onClick={this.props.openRegModal}>Register</button>
        <Modal
          isOpen={this.props.regModalIsOpen}
          onRequestClose={this.props.closeRegModal}
          ariaHideApp={false}
        >
          <a onClick={this.props.closeRegModal}>&times;</a>
          <UserForm
            {...this.props}
            isLogin={false}
            registerFormData={this.state.registerFormData}
            handleRegisterFormChange={this.handleRegisterFormChange}
          />
        </Modal>
      </div>
    );
  }
}

export default ModalClick;