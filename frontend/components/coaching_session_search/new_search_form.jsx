import React from 'react';
import { Link } from 'react-router-dom';
import classes from './new_search_form.module.css';


class NewSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      description: '',
      location: '',
      // duration: '',
      // eliteCoach: '',
      // equipment: '',
    };
    this.submitSearch = this.submitSearch.bind(this);
  }

  update(field) {
    return (e) => this.setState({
      [field]: e.target.value,
    });
  }

  submitSearch(e) {
    const { submitSearch, sportId } = this.props;
    submitSearch(sportId);
  }

  render() {
    return (
      <div className={classes.newCoachingSessionMain}>
        <div className={classes.statusBar}>
          status bar
        </div>
        <div>
          <Link to="/main" className={classes.leftNav}>
            <img className={classes.imgResponsive} src={window.textLogo} alt="logo" />
          </Link>
        </div>
        <section className={classes.interest}>
          <label>
            Training interest:
            <p>What brings you here today?</p>
            <input type="radio" name="interest" value="ready" /> I'm ready to book now
            <input type="radio" name="interest" value="interested" /> I'm interested in booking soon
            <input type="radio" name="interest" value="browsing" /> I'm just browsing
          </label>
          {/* <button type="button">Continue</button> */}
        </section>

        <section className={classes.location}>
          <label>
            Your training location:
            <input type="text" onChange={this.update("location")} value={this.state.location}/>
          </label>
        </section>

        <section className={classes.duration}>
          <label>
            Duration:
            <input type="radio" name="duration" value="0-45" /> -45mins
            <input type="radio" name="duration" value="45-90" /> 45mins - 1.5hrs
            <input type="radio" name="duration" value="90-1000" /> +1.5hrs
          </label>
        </section>
        <section>
          Description:
          <textarea onChange={this.update("description")} value={this.state.description} />
        </section>
        <button type="button" onClick={this.submitSearch}> Find a Coach </button>

      </div>
    );
  }
}

export default NewSearchForm;
