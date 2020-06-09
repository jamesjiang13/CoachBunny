import React from 'react';

class CancelConfirm extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // e.preventDefault(e);

    const { deleteSession, coachingSession } = this.props;
    deleteSession(coachingSession.id);
    closeModal();
  }

  render() {
    const { coachingSession, closeModal } = this.props;
    debugger;
    return (
      <div>
        <div>
          <span>Are you sure you would like to cancel your training session with {coachingSession.firstName}?</span>
          <div>
            <button onClick={() => closeModal()}>No</button>
            <button onClick={() => handleClick()}>Cancel</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CancelConfirm;
