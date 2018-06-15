import React from 'react';
import PropTypes from 'prop-types';
import styles from './Backdrop.css';

const Backdrop = (props) => {
  if (props.showModalShareSave) {
    return (<div
      className={styles.show}
      onClick={props.modalShareSaveHandler}
      onKeyDown={props.keyPressHandler}
      tabIndex="0"
      role="presentation"
    />);
  } else if (props.showModalGallery) {
    return (<div
      className={styles.show}
      role="presentation"
    />);
  }
  return null;
};

Backdrop.propTypes = {
  showModalGallery: PropTypes.bool.isRequired,
  showModalShareSave: PropTypes.bool.isRequired,
  modalShareSaveHandler: PropTypes.func.isRequired,
};

export default Backdrop;
