import React from 'react';
import Modal from 'react-modal';


class UserCreds extends React.Component {
  constructor() {
    super();
    this.state = {
      modalIsOpen: false
    };
  }

  openModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false });
  }


  render() {
    return (
      <div>
        <button onClick={this.openModal}>open</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onRequestClose={this.closeModal}
        >
          <button onClick={this.closeModal}>close</button>
        </Modal>
      </div>
    );
  }
}

export default UserCreds;