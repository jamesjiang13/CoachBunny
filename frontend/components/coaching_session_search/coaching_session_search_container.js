import { connect } from 'react-redux';
import NewSearchForm from './new_search_form';
import { fetchCoachSearch } from '../../actions/coaching_sessions_search_actions';

const mapState = (state, ownProps) => ({
  // sport_id: this.ownProps.match.params[this.state.sport_search],
});

const mapDispatch = (dispatch) => ({
  submitForm: (sport_id) => dispatch(fetchCoachSearch(sport_id)),
});

export default connect(
  mapState, mapDispatch,
)(NewSearchForm);
