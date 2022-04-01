import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import fetchImages from '../services/api';
import Modal from './Modal/Modal';
import '../components/App.css';
import Loader from './Loader/Loader';

import React, { Component } from 'react';

export default class App extends Component {
  state = {
    query: '',
    page: 1,
    isPending: false,
    isModalOpen: false,
    images: [],
    modalImg: '',
  };

  handleSetQuery = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmitForm = event => {
    event.preventDefault();
    this.setState({ isPending: true, page: 1 });
  };
  componentDidUpdate() {
    if (this.state.isPending) {
      fetchImages(this.state.query, this.state.page).then(img => {
        this.setState(prev => ({
          images: this.state.page > 1 ? [...prev.images, ...img] : img,
          isPending: false,
        }));
      });
    }
  }
  handleToggleModal = image => {
    this.setState(prev => ({
      isModalOpen: !prev.isModalOpen,
      modalImg: image,
    }));
  };
  handleLoadMore() {
    this.setState(prev => ({ page: prev.page + 1, isPending: true }));
  }
  render() {
    const { query, images, isModalOpen, modalImg, isPending } = this.state;
    const {
      handleSetQuery,
      handleSubmitForm,
      handleToggleModal,
      handleLoadMore,
    } = this;
    return (
      <div>
        <Searchbar
          handleSetQuery={handleSetQuery}
          query={query}
          handleSubmitForm={handleSubmitForm}
        />
        <ImageGallery handleToggleModal={handleToggleModal} images={images} />
        {images.length >= 12 && (
          <Button handleLoadMore={handleLoadMore.bind(this)} />
        )}

        {isPending && <Loader />}
        {isModalOpen && (
          <Modal modalImg={modalImg} handleToggleModal={handleToggleModal} />
        )}
      </div>
    );
  }
}
