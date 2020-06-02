import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import SearchForm from './search';
import { fetchCoachSearch } from '../../actions/coaching_sessions_search_actions';

const mapState = (state, ownProps) => ({
  sportId: ownProps.match.params.id,
  currentUserId: state.session.currentUserId,
});

const mapDispatch = (dispatch) => ({
  submitSearch: ({ sportId, duration, description }) => dispatch(fetchCoachSearch({ sportId, duration, description })),

});

export default withRouter(connect(
  mapState, mapDispatch,
)(SearchForm));
