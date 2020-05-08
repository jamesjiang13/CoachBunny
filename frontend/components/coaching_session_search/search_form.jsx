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
    };
    this.handleSearch = this.handleSearch.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value,
    });
  }

  handleOptionChange(e) {
    this.setState({
      duration: e.target.value,
    });
  }

  handleSearch() {
    const { submitSearch, sportId, history } = this.props;
    const { duration, location, description } = this.state;
    // if (duration === '') {
    //   this.setState({
    //     errors: 'Must have a duration'});
    // } else if (location.length !== 5) {
    //   this.setState({
    //     errors: 'Please enter a valid 5-digit zip code.'});
    // } else {
      submitSearch({ sportId, duration, description })
        .then(history.push('/results'));
    }
  // }


  render() {
    const { location, duration, description } = this.state;
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
            <label>
              <input type="radio" name="interest" value="ready" /> I'm ready to book now
            </label>
            <label>
              <input type="radio" name="interest" value="interested" /> I'm interested in booking soon
            </label>
            <label>
              <input type="radio" name="interest" value="browsing" /> I'm just browsing
            </label>
          </section>

          <section className={classes.location}>
            <label> Your training location: </label>
            <input type="text" onChange={this.update('location')} value={location} />
          </section>

          <section className={classes.duration}>
            <span> How long would you like to train for: </span>
            <label>
              <input
                type="radio"
                name="duration"
                value="0-45"
                checked={duration === '0-45'}
                onChange={this.handleOptionChange}
              /> 45 minutes or less
            </label>
            <label>
              <input
                type="radio"
                name="duration"
                value="45-90"
                checked={duration === '45-90'}
                onChange={this.handleOptionChange}
              /> 45-90 minutes
            </label>
            <label>
              <input
                type="radio"
                name="duration"
                value="90-500"
                checked={duration === '90-500'}
                onChange={this.handleOptionChange}
              /> +90 minutes
            </label>
          </section>
          <section className={classes.description}>
            Please add a short description of what you'd like to work on:
            <textarea onChange={this.update('description')} value={description} />
          </section>
          <span className={classes.errors}>{this.state.errors}</span>
          <button type="button" onClick={this.handleSearch}> Find a Coach </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchForm);
