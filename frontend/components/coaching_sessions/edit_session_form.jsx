import React from 'react';
import { FaTimes } from 'react-icons/fa';
import classes from './edit_session_form.module.css';

function currentDate() {
  const now = new Date();
  let month = now.toLocaleDateString().split('/')[0];
  let day = now.toLocaleDateString().split('/')[1];
  const year = now.toLocaleDateString().split('/')[2];
  month = (parseInt(month, 10) < 10 ? `0${month}` : month);
  day = (parseInt(day, 10) < 10 ? `0${day}` : day);
  return `${year}-${month}-${day}`;
}

function extractDate(fullDateTime) {
  const month = parseInt(fullDateTime.slice(5, 7), 10);
  const day = parseInt(fullDateTime.slice(8, 10), 10);
  const months = ['nil', 'Jan', 'Feb', 'Mar', 'Apr', 'May',
    'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
  return [months[month], day];
}

function extractTime(fullDateTime) {
  const times = {
    '08:00': '8:00 am',
    '09:00': '9:00 am',
    '10:00': '10:00 am',
    '11:00': '11:00 am',
    '12:00': '12:00 pm',
    '13:00': '1:00 pm',
    '14:00': '2:00 pm',
    '15:00': '3:00 pm',
    '16:00': '4:00 pm',
    '17:00': '5:00 pm',
    '18:00': '6:00 pm',
  };
  const timeObj = new Date(fullDateTime);
  const milTime = timeObj.toTimeString().slice(0, 5);
  return [milTime, times[milTime]];
}

class EditSessionForm extends React.Component {
  constructor(props) {
    super(props);
    const { session } = this.props;
    const timeObj = extractTime(session.trainingDate);

    this.state = {
      showTime: timeObj[1],
      trainingDate: session.trainingDate.split('T')[0],
      trainingTime: timeObj[0],
      trainingDescription: session.trainingDescription,
      errors: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { trainingDate, trainingTime, trainingDescription } = this.state;
    if (trainingDescription.length === 0) {
      this.setState({ errors: 'Tell us what you want to work on' });
    } else {
      const {
        updateSession, closeModal, session, userId,
      } = this.props;
      const finalSessionDetails = {
        id: session.id,
        sportId: session.sportId,
        coachId: session.coachId,
        trainingDuration: session.trainingDuration,
        trainingRate: session.trainingRate,
        userId,
        trainingDate: new Date(`${trainingDate} ${trainingTime}`),
        trainingDescription,
      };
      debugger;
      updateSession(finalSessionDetails);
      closeModal();
      location.href = '/#/main/mysessions';
    }
  }

  update(field) {
    debugger;
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  updateTime(newTime) {
    const times = {
      '08:00': '8:00 am',
      '09:00': '9:00 am',
      '10:00': '10:00 am',
      '11:00': '11:00 am',
      '12:00': '12:00 pm',
      '13:00': '1:00 pm',
      '14:00': '2:00 pm',
      '15:00': '3:00 pm',
      '16:00': '4:00 pm',
      '17:00': '5:00 pm',
      '18:00': '6:00 pm',
    };

    this.setState({
      trainingTime: newTime,
      showTime: times[newTime],
    });
  }

  handleCancel() {
    const { closeModal } = this.props;
    closeModal();
  }

  render() {
    const { session } = this.props;
    const {
      trainingDate, trainingTime, showTime, trainingDescription, errors,
    } = this.state;

    return (
      <div className={classes.selectMainContainer}>
        <div className={classes.cancel}>
          <FaTimes onClick={() => this.handleCancel()} />
        </div>
        <div className={classes.top}>
          <span>Edit your upcoming training details:</span>
        </div>
        <div className={classes.bottom}>
          <div className={classes.leftContainer}>
            <div className={classes.coachAvailability}>
              <div className={classes.coachImage}>
                {(session.coach.imageUrl
                  ? <img src={session.coach.imageUrl} alt="profile" />
                  : <img src={window.profilePic} alt="profile" />
                )}
              </div>
              <h2>{`Your coach: ${session.coach.firstName} ${session.coach.lastName[0]}`}</h2>
            </div>
            <div className={classes.trainingTime}>
              <input type="date" min={currentDate()} value={trainingDate} onChange={this.update('trainingDate')} />
              <select value={trainingTime} onChange={(e) => this.updateTime(e.target.value)}>
                <option value="08:00">8:00 am</option>
                <option value="09:00">9:00 am</option>
                <option value="10:00">10:00 am</option>
                <option value="11:00">11:00 am</option>
                <option value="12:00">12:00 pm</option>
                <option value="13:00">1:00 pm</option>
                <option value="14:00">2:00 pm</option>
                <option value="15:00">3:00 pm</option>
                <option value="16:00">4:00 pm</option>
                <option value="17:00">5:00 pm</option>
                <option value="18:00">6:00 pm</option>
              </select>
            </div>
            <div className={classes.trainingDescription}>
              <span>Confirm training details:</span>
              <textarea
                value={trainingDescription}
                onChange={this.update('trainingDescription')}
                className={classes.trainingDescriptionText}
              />
            </div>
          </div>
          <div className={classes.rightContainer}>
            <h2>New training time:</h2>
            <h1 className={classes.timeConfirm}>{showTime}</h1>
            <div className={classes.redError}>{errors}</div>
            <button className={classes.trainNow} type="button" onClick={this.handleSubmit}> Confirm </button>
          </div>
        </div>
      </div>
    );
  }
}

export default EditSessionForm;
