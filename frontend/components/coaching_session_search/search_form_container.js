import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from './search';
import { fetchCoachSearch } from '../../actions/coaching_sessions_search_actions';

const mapState = (state, ownProps) => {
  return ({
    sportId: ownProps.match.params.id,
  });
};

const mapDispatch = (dispatch) => ({
  submitSearch: ({ sportId, duration }) => dispatch(fetchCoachSearch({ sportId, duration })),

});

export default withRouter(connect(
  mapState, mapDispatch,
)(SearchForm));
