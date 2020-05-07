import React from 'react';
import SearchForm from './search_form';

class CoachingSessionSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { submitSearch, sportId } = this.props;
    return (
      <div>
        <SearchForm submitSearch={submitSearch} sportId={sportId} />
      </div>
    );
  }
}

export default CoachingSessionSearch;
