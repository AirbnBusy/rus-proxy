import React from 'react';
import styles from './ModalSS.css';

const ModalSS = ({ showShareBox, showSaveBox, modalShareSaveHandler, heroImgURI }) => {
  let path = null;
  let desc = null;
  let buttonClasses = null;
  let thumbClasses = [styles['thumb-off']];
  if (showShareBox) {
    path = 'https://s3-us-west-1.amazonaws.com/airbnbusy/photos/share_box.png';
    desc = 'Share Box';
    buttonClasses = [styles.close, styles['close-share']];
  } else if (showSaveBox) {
    path = 'https://s3-us-west-1.amazonaws.com/airbnbusy/photos/save_box.png';
    desc = 'Save Box';
    buttonClasses = [styles.close, styles['close-save']];
    thumbClasses = [styles['thumb-on']];
  }

  if (showShareBox || showSaveBox) {
    return (
      <div className={styles.container} >
        <span
          className={buttonClasses.join(' ')}
          onClick={modalShareSaveHandler}
        />
        <img src={path} alt={desc} />
        <img className={thumbClasses} src={heroImgURI} alt="Room" />
      </div>
    );
  }

  return null;
};

export default ModalSS;
