import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import classes from './search_fields.module.css';

class SearchFields extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    };

    this.getMatches = this.getMatches.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.checkSubmit = this.checkSubmit.bind(this);
  }

  getMatches() {
    const matches = [];
    const { search } = this.state;
    const { allSports } = this.props;
    const sports = Object.values(allSports).map((sport) => sport.sport);
    if (search.length === 0) return allSports;

    sports.forEach((sport) => {
      const sub = sport.slice(0, search.length);
      if (sub.toLowerCase() === search.toLowerCase()) matches.push(sport);
    });

    // if (matches.length === 0) matches.push('No matches');
    return matches;
  }

  checkSubmit(sportName) {
    const { allSports } = this.props;
    const sports = Object.values(allSports).map((sport) => sport.sport);
    if (sports.includes(sportName)) {
      const selected = Object.values(allSports).filter((sport) => sport.sport === sportName);
      return selected[0].id;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const { search } = this.state;
    // const { allSports } = this.props;
    // const sports = Object.values(allSports).map((sport) => sport.sport);
    const sportId = this.checkSubmit(search);
    if (sportId) {
      debugger;
      window.location.href = `#/sports/${sportId}`;
    }
    // if (sports.includes(search)) {
    //   const selected = Object.values(allSports).filter((sport) => sport.sport === search);
    //   const sportId = selected[0].id;
    //   return <Redirect to={`/sports/${sportId}`} />; // how to get it to the right address...
    // }
  }

  selectSport(event) {
    e.preventDefault();
    const selected = event.currentTarget.innerText;
    const sportId = this.checkSubmit(selected);
    if (sportId) {
      debugger;
      window.location.href = `#/sports/${sportId}`;
    }
    // const { allSports } = this.props;
    // const sports = Object.values(allSports).map((sport) => sport.sport);
    // if (sports.includes(search)) {
    //   const selected = Object.values(allSports).filter((sport) => sport.sport === search);
    //   const sportId = selected[0].id;
    //   return <Redirect to={`/sports/${sportId}`} />; // how to get it to the right address...
    // }
  }

  update() {
    return (e) => {
      this.setState({
        search: e.target.value,
      });
    };
  }

  render() {
    const { search } = this.state;
    // const results = this.getMatches().map((result, i) => {
    //   return (
    //     <li key={i} onClick={this.selectSport}>{result}</li>
    //   );
    // });

    return (
      <div className={classes.searchFieldMain}>
        <div className={classes.searchFieldBox}>
          <div className={classes.searchFieldBanner}>
            <h1>Find Your Next Coach</h1>
          </div>
          <div className={classes.search}>
            <form className={classes.searchForm} onSubmit={this.handleSubmit}>
              <input
                type="text"
                placeholder="What sport would you like to work on"
                value={search}
                onChange={(e) => this.setState({ search: e.target.value })}
              />
              {/* <button type="submit">Search</button> */}
            </form>
            <ul>
              {/* {results} */}
            </ul>
          </div>
          <div className={classes.searchFieldButtons}>
            <div className={classes.buttonsR1}>
              <Link to="/sports/1">Football</Link>
              <Link to="/sports/2">Basketball</Link>
              <Link to="/sports/3">Soccer</Link>
            </div>
            <div className={classes.buttonsR2}>
              <Link to="/sports/4">Tennis</Link>
              <Link to="/sports/5">Golf</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  allSports: state.entities.sports,
});

const mapDispatch = (dispatch) => ({
});

export default connect(
  mapState, mapDispatch,
)(SearchFields);
