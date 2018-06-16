import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CurrentPhoto from '../CurrentPhoto/CurrentPhoto';
import PhotoList from '../PhotoList/PhotoList';
import { X, Left, Right } from '../SVG/SVG';
import styles from './ModalGal.css';


class ModalGal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      i: 0,
    };
    this.previousPic = this.previousPic.bind(this);
    this.nextPic = this.nextPic.bind(this);
  }

  previousPic() {
    this.state.i > 0 ?
    this.setState(prevState => ({ i: --prevState.i })) : this.setState({ i: this.props.photosInfo.length -1 });
  }

  nextPic() {
    this.state.i < this.props.photosInfo.length - 1 ?
    this.setState(prevState => ({ i: ++prevState.i })) : this.setState({ i: 0 });
  }

  renderModal() {
    return (
      <div className={styles.container}>
        <div className={styles['close-control-bar']}>
          <X modalGalleryHandler={this.props.modalGalleryHandler} />
        </div>
        <Left previousPic={this.previousPic} />
        <Right nextPic={this.nextPic} />
        <CurrentPhoto currentPhoto={this.props.photosInfo[this.state.i].uri} />
        <PhotoList photosInfo={this.props.photosInfo} />
      </div>
    );
  }

  render() {
    return this.props.showModalGallery ? this.renderModal() : null;
  }
}

ModalGal.propTypes = {
  showModalGallery: PropTypes.bool.isRequired,
};

export default ModalGal;
