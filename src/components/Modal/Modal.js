import React, { useEffect } from 'react';
import s from './Modal.module.css';

export default function Modal({ handleToggleModal, modalImg }) {
  const onCloseModalByEsc = event => {
    if (event.keyCode === 27) {
      handleToggleModal('');
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', onCloseModalByEsc);
    return () => {
      window.removeEventListener('keydown', onCloseModalByEsc);
    };
  });

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

// export default class Modal extends Component {
//   onCloseModalByEsc = event => {
//     if (event.keyCode === 27) {
//       this.props.handleToggleModal('');
//     }
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.onCloseModalByEsc);
//   }
//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.onCloseModalByEsc);
//   }
//   render() {
//     const { handleToggleModal, modalImg } = this.props;
//     return (
//       <div>
//         <div
//           className={s.Overlay}
//           onClick={event => {
//             if (event.target === event.currentTarget) {
//               handleToggleModal('');
//             }
//           }}
//         >
//           <div className={s.Modal}>
//             <img src={modalImg} alt="" />
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
