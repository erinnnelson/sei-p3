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
  resetRegisterForm = () => {
    this.setState({
      registerFormData: {
        username: '',
        password: '',
        email: ''
      }
    })
  }
  resetLoginForm = () => {
    this.setState({
      loginFormData: {
        username: '',
        password: ''
      }
    })
  }
  handleOpenRegisterClick = () => {
    this.resetRegisterForm();
    this.props.openLoginModal();
  }
  handleCloseRegisterClick = () => {
    this.resetRegisterForm();
    this.props.closeRegModal()
  }
  handleOpenLoginClick = () => {
    this.resetLoginForm();
    this.props.openRegModal();
  }
  handleCloseLoginClick = () => {
    this.resetLoginForm();
    this.props.closeLoginModal();
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
        <button className="log-button" onClick={this.handleOpenRegisterClick}>Log In</button>
        <Modal
          isOpen={this.props.loginModalIsOpen}
          onRequestClose={this.handleCloseLoginClick}
          ariaHideApp={false}
        >
          <a onClick={this.handleCloseLoginClick}>&times;</a>
          <UserForm
            {...this.props}
            isLogin={true}
            loginFormData={this.state.loginFormData}
            handleLoginFormChange={this.handleLoginFormChange}
          />
        </Modal>
        <button className="reg-button" onClick={this.handleOpenLoginClick}>Register</button>
        <Modal
          isOpen={this.props.regModalIsOpen}
          onRequestClose={this.handleCloseRegisterClick}
          ariaHideApp={false}
        >
          <a onClick={this.handleCloseRegisterClick}>&times;</a>
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