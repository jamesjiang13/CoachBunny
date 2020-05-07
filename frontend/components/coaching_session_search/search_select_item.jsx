import classes from './search_select_item.module.css';
import React from 'react';
import { connect } from 'react-redux';

class SearchSelectItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      null
    )
  }
}

const mapState = (state) => ({

});

const mapDispatch = (dispatch) => ({
  submitForm: (state) => dispatch(),
  closeModal: () =>dispatch(closeModal()),
  otherForm: (
    <button onClick={() => dispatch(openModal('select'))}>
      Select me
    </button>
  )
});

export default connect(
  mapState, mapDispatch,
)(SearchSelectItem);
