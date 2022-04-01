import React, { Component } from 'react';
import s from './Modal.module.css';

export default class Modal extends Component {
  onCloseModalByEsc = event => {
    if (event.keyCode === 27) {
      this.props.handleToggleModal('');
    }
  };
  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModalByEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModalByEsc);
  }
  render() {
    const { handleToggleModal, modalImg } = this.props;
    return (
      <div>
        <div
          className={s.Overlay}
          onClick={event => {
            if (event.target === event.currentTarget) {
              handleToggleModal('');
            }
          }}
        >
          <div className={s.Modal}>
            <img src={modalImg} alt="" />
          </div>
        </div>
      </div>
    );
  }
}
