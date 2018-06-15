import React from 'react';
import PhotoListEntry from '../PhotoListEntry/PhotoListEntry';
import styles from './PhotoList.css';

const PhotoList = ({ photosInfo }) => {
  return (
    <div className={styles['photo-list-container']}>
      <div />
      {photosInfo.map(photoInfo => <PhotoListEntry uri={photoInfo.uri} key={photoInfo.uri} />)}
    </div>
  );
};

export default PhotoList;
