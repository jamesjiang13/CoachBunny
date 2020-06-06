import React from 'react';
import { Link } from 'react-router-dom';
import classes from './search_select_item.module.css';

class SearchSelectItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      trainingDate: '',
      trainingDescription: this.props.description,
      errors: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { trainingDate, trainingDescription } = this.state;
    if (trainingDate === '') {
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
        trainingDate,
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
      firstName, lastName, coachingRate, duration, eliteCoach, equipment,
    } = this.props.coach;
    const { errors, trainingDate, trainingDescription } = this.state;
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
              {(!eliteCoach ? null : <div className={classes.coachElite}>Elite</div>)}
              <div>
                Price: $
                {coachingRate}
                /session
              </div>
              <div>
                Duration:
                {' '}
                {duration}
                mins
              </div>
              <div>
                <span>Has equipment:</span>
                {' '}
                {(equipment ? 'yes' : 'no')}
              </div>
            </div>
            <div className={classes.trainingTime}>
              {' '}
              <span>Ideal training time:</span>
              <input type="datetime-local" value={trainingDate} onChange={this.update('trainingDate')} />
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
            <button type="submit"> Reserve this Coach </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SearchSelectItem;
