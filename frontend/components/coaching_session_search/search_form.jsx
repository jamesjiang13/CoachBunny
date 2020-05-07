import React from 'react';
import { Link, Redirect, withRouter } from 'react-router-dom';
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
    const { duration } = this.state;
    if (duration === '') {
      this.setState({
        errors: 'Must have a duration',
      });
    } else {
      submitSearch({ sportId, duration })
        .then(history.push('/results'));
    }
    // <Redirect to="/results" />
  }

  render() {
    const { location, duration, description } = this.state;
    return (
      <div className={classes.searchMain}>
        <div className={classes.searchFields}>

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
              <input type="text" onChange={this.update('location')} value={location} />
            </label>
          </section>

          <section className={classes.duration}>
            <label>
              Duration:
              <input
                type="radio"
                name="duration"
                value="0-45"
                checked={duration === '0-45'}
                onChange={this.handleOptionChange}
              /> under 45mins
              <input
                type="radio"
                name="duration"
                value="45-90"
                checked={duration === '45-90'}
                onChange={this.handleOptionChange}
              /> 45-90 minutes
              <input
                type="radio"
                name="duration"
                value="90-500"
                checked={duration === '90-500'}
                onChange={this.handleOptionChange}
              /> +90 minutes
            </label>
          </section>
          <section>
            Description:
            <textarea onChange={this.update('description')} value={description} />
          </section>
          {this.state.errors}
          <button type="button" onClick={this.handleSearch}> Find a Coach </button>
        </div>
      </div>
    );
  }
}

export default withRouter(SearchForm);

// so we can use route props
