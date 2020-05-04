import React from 'react';
import classes from './new_search_form.module.css';

class NewSearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      duration: '',
      elite_coach: '',
      equipment: '',
    };
  }

  submitSearch(e) {
    e.preventDefault();
    const { submitForm } = this.props;
    submitForm(this.state);
  }

  render() {
    return (
      <div className={classes.newCoachingSessionMain}>
  
        <section>
          <label>
            Training interest:
            <p>What brings you here today?</p>
            <input type="radio" name="interest" value="ready" />
            <input type="radio" name="interest" value="interested" />
            <input type="radio" name="interest" value="browsing" />
          </label>
        </section>

        <section>
          <label for="location">
            Your training location:
            <input type="text" name="location" />
          </label>
        </section>

        <section>
          <label for="duration">
            Duration:
            <input type="radio" name="duration" value="30mins - 45mins" />
            <input type="radio" name="duration" value="45mins - 1.5hrs" />
            <input type="radio" name="duration" value="+1.5hrs" />
          </label>
        </section>

        <button type="button" onClick={this.submitSearch}> Find a Coach </button>

      </div>
    );
  }
}

export default NewSearchForm;
