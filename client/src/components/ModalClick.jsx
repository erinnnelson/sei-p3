import React from 'react';
import Modal from 'react-modal';
import UserForm from './UserForm';


class ModalClick extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalIsOpen: false,
      regModalIsOpen: false
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
          />
        </Modal>
      </div>
    );
  }
}

export default ModalClick;