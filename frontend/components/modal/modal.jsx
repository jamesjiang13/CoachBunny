import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import SearchSelectItemContainer from '../coaching_session_search/search_select_item_container';
import classes from './modal.module.css';

function Modal({ modal, closeModal }) {
  if (!modal) return null;

  let component;
  switch (Object.keys(modal)[0]) {
    case 'select':
      component = <SearchSelectItemContainer coach={modal.select.coach} />;
      break;
    default:
      return null;
  }

  return (
    <div className={classes.modalBackground} onClick={closeModal}>
      <div className={classes.modalChild} onClick={(e) => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  modal: state.ui.modal,
});

const mapDispatchToProps = (dispatch) => ({
  closeModal: () => dispatch(closeModal()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
