import React from 'react';
import styles from './PhotoListEntry.css';

const PhotoListEntry = props =>
  (
    <img
      className={styles['carousel-image']}
      src={props.uri}
      alt=""
    />
  );

export default PhotoListEntry;
