import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './search_results.module.css';
import SearchResultItem from './search_result_item';
import NavBar from '../nav_bar/nav_bar_container';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      eliteFilter: false,
      equipmentFilter: false,
    };
    this.noResults = this.noResults.bind(this);
    this.filterSearchResults = this.filterSearchResults.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  toggle(field) {
    return (e) => {
      this.setState({
        [field]: !this.state[field],
      });
    };
  }

  noResults() {
    return (
      <div className={classes.noCoaches}>
        <NavBar />
        <div className={classes.noCoachesBody}>
          <span>We&apos;re sorry, your search did not return any coaches.</span>
          <div className={classes.redoSearch}>
            <Link to="/main" className={classes.redoSearchLink}>Search Again</Link>
          </div>
        </div>
      </div>
    )
  }

  filterSearchResults() {
    const { eliteFilter, equipmentFilter } = this.state;
    const { results } = this.props;
    
    switch (true) {
      case eliteFilter && equipmentFilter:
        return results.filter((coach) => coach.eliteCoach && coach.equipment);
      case eliteFilter && !equipmentFilter:
        return results.filter((coach) => coach.eliteCoach);
      case !eliteFilter && equipmentFilter:
        return results.filter((coach) => coach.equipment);
      default:
        return results;
    }
  }

  render() {
    const coaches = this.filterSearchResults();
    const { eliteFilter, equipmentFilter } = this.state;
    if (coaches.length === 0) return this.noResults();

    return (
      <div>
        <div className={classes.textLogo}>
          <Link to="/main" className={classes.leftNav}>
            <img className={classes.imgResponsive} src={window.textLogo} alt="logo" />
          </Link>
        </div>
        <div className={classes.searchContainer}>
          <div className={classes.filterContainer}>
            <span>Coach Type</span>
            <label className={classes.checkboxContainer} onChange={this.toggle('eliteFilter')} >
              Elite Coach
              <input type="checkbox" checked={eliteFilter} />
              <span className={classes.checkmark} />
            </label>
            <label className={classes.checkboxContainer} onChange={this.toggle('equipmentFilter')}>
              Has Equipment
              <input type="checkbox" checked={equipmentFilter} />
              <span className={classes.checkmark} />
            </label>
          </div>
          <div className={classes.searchResults}>
            {coaches.map((result) => <SearchResultItem result={result} key={result.id} />)}
            <div className={classes.redoSearch}>
              <Link to="/main" className={classes.redoSearchLink}>Search Again</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapState = (state) => ({
  results: Object.values(state.search.searchResults),
});

export default connect(
  mapState,
)(SearchResults);
