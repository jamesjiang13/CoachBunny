import React from 'react';
import SearchResultItem from './search_result_item';

class SearchResults extends React.Component {
  constructor(props) {
    super(props)
  }

  

  render() {
    return (
      <div>
        {/* search bar header? */}
        <div>
            
          <SearchResultItem />
        </div>
      </div>
    )
  }
}

export default SearchResults;
