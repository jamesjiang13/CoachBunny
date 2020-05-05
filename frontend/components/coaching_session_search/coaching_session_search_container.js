import { connect } from 'react-redux';
import NewSearchForm from './new_search_form';
import { fetchCoachSearch } from '../../actions/coaching_sessions_search_actions';

const mapState = (state, ownProps) => {
  return ({
    sportId: ownProps.match.params.id,
  });
};

const mapDispatch = (dispatch) => ({
  submitSearch: ({ sportId, duration }) => dispatch(fetchCoachSearch({ sportId, duration })),
});

export default connect(
  mapState, mapDispatch,
)(NewSearchForm);
