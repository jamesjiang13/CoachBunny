import { connect } from 'react-redux';
import NewSearchForm from './new_search_form';
import { fetchCoachSearch } from '../../actions/coaching_sessions_search_actions';

const mapState = (state, { match }) => {
  debugger
  return ({
    sportId: parseInt(match.params.sportId),
  });
};

const mapDispatch = (dispatch) => ({
  fetchCoaches: (sportId) => dispatch(fetchCoachSearch(sportId)),
});

export default connect(
  mapState, mapDispatch,
)(NewSearchForm);
