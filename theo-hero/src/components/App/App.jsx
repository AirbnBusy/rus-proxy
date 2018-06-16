import React, { Component } from 'react';
import axios from 'axios';
import Backdrop from '../Backdrop/Backdrop';
import ModalSS from '../ModalSS/ModalSS';
import ModalGal from '../ModalGal/ModalGal';
import Hero from '../Hero/Hero';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      photosInfo: null,
      showModalGallery: false,
      showModalShareSave: false,
      showShareBox: false,
      showSaveBox: false,
    };
    this.modalGalleryHandler = this.modalGalleryHandler.bind(this);
    this.modalShareSaveHandler = this.modalShareSaveHandler.bind(this);
    this.keyPressHandler = this.keyPressHandler.bind(this);
  }

  componentDidMount() {
    axios.defaults.baseURL = 'http://localhost:3003';
    // const listingID = document.location.href.slice(28, 32);
    const listingID = global.window.location.pathname.match(/(rooms|listings)\/(\d{4,4})/)[2];
    axios.get(`/api/listings/${listingID}/photos`)
      .then(photosInfo => this.setState({ photosInfo: photosInfo.data }))
      .catch(err => console.log('ERROR: ', err.message));
  }

  modalGalleryHandler() {
    this.setState(prevState => ({ showModalGallery: !prevState.showModalGallery }));
  }

  modalShareSaveHandler(e) {
    e.stopPropagation();
    const label = e.target.textContent;
    this.setState(prevState => ({ showModalShareSave: !prevState.showModalShareSave }));
    (this.state.showShareBox || this.state.showSaveBox) ?
    this.setState({ showShareBox: false, showSaveBox: false }) :
    this.setState(prevState => ({ [`show${label}Box`]: !prevState[`show${label}Box`] }));
  }

  keyPressHandler(e) {
    console.log('event', e);
    if (e.charCode === 27) {
      this.setState({
        showModalGallery: false,
        showModalShareSave: false,
        showShareBox: false,
        showSaveBox: false,
      });
    }
  }

  render() {
    if (this.state.photosInfo) {
      return (
        <div>
          <Backdrop
            showModalGallery={this.state.showModalGallery}
            showModalShareSave={this.state.showModalShareSave}
            modalShareSaveHandler={this.modalShareSaveHandler}
            keyPressHandler={this.keyPressHandler}
          />
          <ModalSS
            showModalShareSave={this.state.showModalShareSave}
            showShareBox={this.state.showShareBox}
            showSaveBox={this.state.showSaveBox}
            heroImgURI={this.state.photosInfo[0].uri}
            modalShareSaveHandler={this.modalShareSaveHandler}
          />
          <ModalGal
            showModalGallery={this.state.showModalGallery}
            modalGalleryHandler={this.modalGalleryHandler}
            photosInfo={this.state.photosInfo}
          />
          <Hero
            heroImgURI={this.state.photosInfo[0].uri}
            modalGalleryHandler={this.modalGalleryHandler}
            modalShareSaveHandler={this.modalShareSaveHandler}
          />
        </div>
      );
    }
    return null;
  }
}

export default App;
