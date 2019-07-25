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

  handleOpenRegisterClick = () => {
    this.setState({
      registerFormData: {
        username: '',
        password: '',
        email: ''
      }
    })
    this.props.openLoginModal();
  }

  handleOpenLoginClick = () => {
    this.setState({
      loginFormData: {
        username: '',
        password: ''
      }
    })
    this.props.openRegModal();
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
      <>
        <button className="log-button" onClick={this.openLoginModal}>Log In</button>
        <Modal className="login-modal"
          isOpen={this.state.loginModalIsOpen}
          onRequestClose={this.closeLoginModal}
          ariaHideApp={false}
        >
          <div className="modal-content">
            <a className="x-close" onClick={this.closeLoginModal}>&#10006;</a>
            <UserForm
              {...this.props}
              isLogin={true}
              loginFormData={this.state.loginFormData}
              handleLoginFormChange={this.handleLoginFormChange}
            />
          </div>
        </Modal>

        <button className="reg-button" onClick={this.openRegModal}>Register</button>
        <Modal className="register-modal"
          isOpen={this.state.regModalIsOpen}
          onRequestClose={this.closeRegModal}
          ariaHideApp={false}
        >
          <div className="modal-content">
            <a className="x-close" onClick={this.closeRegModal}>&times;</a>
            <UserForm
              {...this.props}
              isLogin={false}
              registerFormData={this.state.registerFormData}
              handleRegisterFormChange={this.handleRegisterFormChange}
            />
          </div>
         
      <div>
        <button className="log-button" onClick={this.handleOpenRegisterClick}>Log In</button>
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

        <button className="reg-button" onClick={this.handleOpenLoginClick}>Register</button>
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
      </>
    );
  }
}


export default ModalClick;