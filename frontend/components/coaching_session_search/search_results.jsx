import React from 'react';
import SearchResultItem from './search_result_item';
import { connect } from 'react-redux';

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {
    debugger
    return (
      <div>
        {/* search bar header? */}
        <div>
          {this.state.results.map((coach) =>
            <SearchResultItem coach={coach} />)}
        </div>
      </div>
    );
  }
}

const mapState = (state, ownProps) => ({
  results: Object.values(state.search.searchResults),
  sportId: this.props.match.params.id,
});

export default connect(
  mapState,
)(SearchResults);
