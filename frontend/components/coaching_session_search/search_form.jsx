import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import classes from './search_form.module.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      location: '',
      duration: '',
      errors: '',
      interest: '',
    };
    this.handleSearch = this.handleSearch.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value,
    });
  }

  handleSearch() {
    const { submitSearch, sportId, history } = this.props;
    const { duration, location, description, interest } = this.state;
    if (duration === '') {
      this.setState({
        errors: 'Must have a duration',
      });
    } else if (location.length !== 5) {
      this.setState({
        errors: 'Please enter a valid 5-digit zip code.',
      });
    } else if (interest.length === 0) {
      this.setState({
        errors: 'Please enter an interest level.',
      });
    } else {
      submitSearch({ sportId, duration, description })
        .then(history.push('/results'));
    }
  }

  render() {
    const {
      location, duration, description, errors, interest,
    } = this.state;
    return (
      <div className={classes.searchMain}>
        <div className={classes.searchFields}>
          <div className={classes.textLogo}>
            <Link to="/main" className={classes.leftNav}>
              <img className={classes.imgResponsive} src={window.textLogo} alt="logo" />
            </Link>
          </div>
          <section className={classes.interest}>
            <h4>Training interest:</h4>
            <span>What brings you here today?</span>
            <label htmlFor="interest">
              <input
                type="radio"
                name="interest"
                value="ready"
                checked={interest === 'ready'}
                onChange={this.update('interest')}
              />
              I'm ready to book now
            </label>
            <label htmlFor="interest">
              <input
                type="radio"
                name="interest"
                value="interested"
                checked={interest === 'interested'}
                onChange={this.update('interest')}
              />
              I'm interested in booking soon
            </label>
            <label htmlFor="interest">
              <input
                type="radio"
                name="interest"
                value="browsing"
                checked={interest === 'browsing'}
                onChange={this.update('interest')}
              />
              I'm just browsing
            </label>
          </section>

          <section className={classes.location}>
            <label htmlFor="location"> Your training location: </label>
            <input
              type="text"
              name="location"
              onChange={this.update('location')}
              value={location}
            />
          </section>

          <section className={classes.duration}>
            <span> How long would you like to train for: </span>
            <label htmlFor="duration">
              <input
                type="radio"
                name="duration"
                value="0-45"
                checked={duration === '0-45'}
                onChange={this.update('duration')}
              />
              45 minutes or less
            </label>
            <label htmlFor="duration">
              <input
                type="radio"
                name="duration"
                value="45-90"
                checked={duration === '45-90'}
                onChange={this.update('duration')}
              />
              45-90 minutes
            </label>
            <label htmlFor="duration">
              <input
                type="radio"
                name="duration"
                value="90-500"
                checked={duration === '90-500'}
                onChange={this.update('duration')}
              />
              +90 minutes
            </label>
          </section>
          <section className={classes.description}>
            Start the conversation and tell your Coach what you need done.
            <br />
            This helps us show you only qualified and available coaches for the job.
            <br />
            Don't worry, you can edit this later.
            <textarea
              onChange={this.update('description')}
              value={description}
              placeholder="Hi! I'm looking for help improving my hips. My club team coach tells me
              that I need to be faster in changing directions. I don't like ladder/cone drills,
              but I know they help. I would prefer a coach who has these things handy since I do not."
            />
          </section>
          <span className={classes.errors}>{errors}</span>
          <button type="button" onClick={this.handleSearch}> Find a Coach </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchForm);
