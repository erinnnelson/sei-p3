import React from 'react';
import Modal from 'react-modal';
import UserForm from './UserForm';


class ModalClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalIsOpen: false,
      regModalIsOpen: false,
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

  openLoginModal = () => {
    this.setState({ loginModalIsOpen: true });
  }

  openRegModal = () => {
    this.setState({ regModalIsOpen: true });
  }

  closeLoginModal = () => {
    this.setState({ loginModalIsOpen: false });
  }

  closeRegModal = () => {
    this.setState({ regModalIsOpen: false });
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
        <button className="log-button" onClick={this.openLoginModal}>Log In</button>
        <Modal
          isOpen={this.state.loginModalIsOpen}
          onRequestClose={this.closeLoginModal}
          ariaHideApp={false}
        >
          <a onClick={this.closeLoginModal}>&times;</a>

          <UserForm
            {...this.props}
            isLogin={true}
            loginFormData={this.state.loginFormData}
            handleLoginFormChange={this.handleLoginFormChange}
          />
        </Modal>

        <button className="reg-button" onClick={this.openRegModal}>Register</button>
        <Modal
          isOpen={this.state.regModalIsOpen}
          onRequestClose={this.closeRegModal}
          ariaHideApp={false}
        >
          <a onClick={this.closeRegModal}>&times;</a>
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