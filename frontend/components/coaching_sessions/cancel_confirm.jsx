import React from 'react';
import classes from './cancel_confirm.module.css';


class CancelConfirm extends React.Component {
  handleClick() {
    const { deleteSession, session, closeModal } = this.props;
    deleteSession(session.id);
    closeModal();
  }

  render() {
    const { session, closeModal } = this.props;
    return (
      <div className={classes.cancelContainer}>
        <div className={classes.cancelBody}>
          <span>
            Are you sure you would like to cancel your training session with {session.coach.firstName}?
          </span>
          <div className={classes.cancelButtons}>
            <button type="button" onClick={() => this.handleClick()}>Cancel</button>
            <button type="button" onClick={() => closeModal()}>Go Back</button>
          </div>
        </div>
      </div>
    );
  }
}

export default CancelConfirm;
