import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './search_results.module.css';
import SearchResultItem from './search_result_item';
import NavBar from '../nav_bar/nav_bar_container';
// import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modal_actions';

class SearchResults extends React.Component {
  render() {
    const { results } = this.props;
    if (results.length === 0) return (
      <div className={classes.noCoaches}>
        <NavBar />
        <div className={classes.noCoachesBody}>
          <span>We're sorry, your search did not return any coaches.</span>
          <div className={classes.redoSearch}>
            <Link to="/main" className={classes.redoSearchLink}>Search Again</Link>
          </div>
        </div>
      </div>
    )
    return (
      <div>
        <div className={classes.textLogo}>
          <Link to="/main" className={classes.leftNav}>
            <img className={classes.imgResponsive} src={window.textLogo} alt="logo" />
          </Link>
        </div>
        <div className={classes.searchResults}>
          {results.map((result) => <SearchResultItem result={result} key={result.id} />)}
        </div>
        <div className={classes.redoSearch}>
          <Link to="/main" className={classes.redoSearchLink}>Search Again</Link>
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
