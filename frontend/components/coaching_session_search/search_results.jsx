import React from 'react';
import { connect } from 'react-redux';
import classes from './search_results.module.css';
import SearchResultItem from './search_result_item';

class SearchResults extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    const { results } = this.props;
    if (!results) return 'no results';
    return (
      <div>
        <div className={classes.searchResults}>
          {results.map((result) => <SearchResultItem result={result} />)}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return ({
    results: Object.values(state.search.searchResults),
  });
};

export default connect(
  mapState,
)(SearchResults);
