import React from 'react';
import { Link } from 'react-router-dom';
import classes from '../coaching_session_search/search_select_item.module.css';

function currentDate() {
  const now = new Date();
  return now.toISOString().split('T')[0];
}

class EditCoachingSession extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainingDate: this.props.session.trainingDate,
      trainingTime: '',
      trainingDescription: this.props.session.trainingDescription,
      errors: '',
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    const { trainingDate, trainingTime, trainingDescription } = this.state;
    if (trainingDate === '' || trainingTime === '') {
      this.setState({ errors: 'Must select a time' });
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

  render() {
    const {
      firstName, lastName, trainingRate, duration,
    } = this.props.session;
    const { errors, trainingDate, trainingDescription } = this.state;
    debugger;
    return (
      <div className={classes.selectMainContainer}>
        <div className={classes.selectCoachContainer}>
          <div className={classes.textLogo}>
            <Link to="/main">
              <img className={classes.imgResponsive} src={window.textLogo} alt="logo" />
            </Link>
          </div>
          <form onSubmit={this.handleSubmit} className={classes.mainSelect}>
            <div className={classes.coachConfirmDetails}>
              <div className={classes.coachProfile}>
                <img src="https://res.cloudinary.com/taskrabbit-com/image/upload/c_fill,g_faces,h_108,w_108/v1408385393/default_avatar.jpg" alt="profile" />
              </div>
              <div className={classes.coachName}>
                {firstName}
                {' '}
                {lastName[0]}
              </div>
              {/* {(!eliteCoach ? null : <div className={classes.coachElite}>Elite</div>)}
              {(!equipment ? null : <div className={classes.coachElite}>Has Equipment</div>)} */}
              <div>
                Price: $
                {trainingRate}
                /session
              </div>
              <div>
                Duration:
                {' '}
                {duration}
                mins
              </div>
            </div>
            <div className={classes.trainingTime}>
              {' '}
              <span>Ideal training time:</span>
              <input type="datetime-local" min={currentDate} value={trainingDate} onChange={this.update('trainingDate')} />
            </div>
            <div className={classes.trainingDescription}>
              <span>Confirm training details:</span>
              <br />
              <textarea
                value={trainingDescription}
                onChange={this.update('trainingDescription')}
                className={classes.trainingDescriptionText}
              />
            </div>
            <div className={classes.errors}>{errors}</div>
            <button type="submit"> Update </button>
          </form>
        </div>
      </div>
    );
  }
}

export default EditCoachingSession;
