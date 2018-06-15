import React from 'react';
import PropTypes from 'prop-types';
import styles from './CurrentPhoto.css';

const CurrentPhoto = (props) => {
  return (
    <div className={styles['main-image-box']}>
      <img style={{ minWidth: '100%', height: 'auto' }} src={props.currentPhoto} alt="room" />
    </div>
  );
};

CurrentPhoto.propTypes = {
  currentPhoto: PropTypes.string.isRequired,
};

export default CurrentPhoto;
