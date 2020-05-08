import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import classes from './search_results.module.css';
import SearchResultItem from './search_result_item';
// import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modal_actions';

class SearchResults extends React.Component {
  render() {
    const { results } = this.props;
    if (!results) return 'no results';
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
          <Link to="/main" className={classes.redoSearchLink} />
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
