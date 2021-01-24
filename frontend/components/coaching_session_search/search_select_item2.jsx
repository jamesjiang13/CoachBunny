import React from 'react';
import classes from './search_select_item2.module.css';

function currentDate() {
  const now = new Date();
  let month = now.toLocaleDateString().split('/')[0];
  let day = now.toLocaleDateString().split('/')[1];
  const year = now.toLocaleDateString().split('/')[2];
  month = (parseInt(month, 10) < 10 ? `0${month}` : month);
  day = (parseInt(day, 10) < 10 ? `0${day}` : day);
  return `${year}-${month}-${day}`;
}

class SearchSelectItem2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainingDate: '',
      trainingTime: '',
      trainingDescription: this.props.description,
      errors: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { trainingDate, trainingTime, trainingDescription } = this.state;
    if (trainingDate === '' || trainingTime === '') {
      this.setState({ errors: 'Must select a date and time' });
    } else {
      const {
        submitForm, closeModal, coach, userId,
      } = this.props;

      const finalSessionDetails = {
        sportId: coach.sportId,
        coachId: coach.id,
        trainingDuration: coach.duration,
        trainingRate: coach.coachingRate,
        userId,
        trainingDate: new Date(`${trainingDate} ${trainingTime}`),
        trainingDescription,
      };
      submitForm(finalSessionDetails);
      closeModal();
      location.href = '/#/main/mysessions';
    }
  }

  update(field) {
    return (e) => this.setState({ [field]: e.currentTarget.value });
  }

  updateTime(time) {
    this.setState({ trainingTime: time });
  }

  render() {
    const {
      firstName, lastName, coachingRate, duration, eliteCoach, equipment, imageUrl,
    } = this.props.coach;

    const {
      errors, trainingDate, trainingTime, trainingDescription,
    } = this.state;

    return (
      <div className={classes.selectMainContainer}>
        <div>Choose your training date and start time:</div>
        <div className={classes.leftContainer}>
          <div className={classes.coachAvailability}>
            <div className={classes.coachImage}>
              {(imageUrl
                ? <img src={imageUrl} alt="profile" />
                : <img src={window.profilePic} alt="profile" />
              )}
            </div>
            <div>{`${firstName} ${lastName[0]}'s Availbility`}</div>
          </div>
          <div className={classes.trainingTime}>
            <span>Ideal training date:</span>
            <input type="date" min={currentDate()} value={trainingDate} onChange={this.update('trainingDate')} />
            <span>Ideal training time:</span>
            <select value={trainingTime} onChange={(e) => this.updateTime(e.target.value)}>
              <option value="08:00">8:00 am</option>
              <option value="08:30">8:30 am</option>
              <option value="09:00">9:00 am</option>
              <option value="09:30">9:30 am</option>
              <option value="10:00">10:00 am</option>
              <option value="10:30">10:30 am</option>
              <option value="11:00">11:00 am</option>
              <option value="11:30">11:30 am</option>
              <option value="12:00">12:00 pm</option>
              <option value="12:30">12:30 pm</option>
              <option value="13:00">1:00 pm</option>
              <option value="13:30">1:30 pm</option>
              <option value="14:00">2:00 pm</option>
              <option value="14:30">2:30 pm</option>
              <option value="15:00">3:00 pm</option>
              <option value="15:30">3:30 pm</option>
              <option value="16:00">4:00 pm</option>
              <option value="16:30">4:30 pm</option>
              <option value="17:00">5:00 pm</option>
              <option value="17:30">5:30 pm</option>
              <option value="18:00">6:00 pm</option>
              <option value="18:30">6:30 pm</option>
            </select>
            <span>
              You can chat to adjust training details or change start time after confirming.
            </span>
          </div>
        </div>

        <div className={classes.rightContainer}>
          <div>Request for:</div>
          <div>{trainingTime}</div>
          <button type="button" onClick={this.handleSubmit}> Reserve this Coach </button>
          <div>Next, confirm your details to get connected with your Coach.</div>
        </div>
      </div>
    );
  }
}

export default SearchSelectItem2;
