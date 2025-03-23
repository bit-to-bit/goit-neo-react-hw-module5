import Modal from 'react-modal';
import css from './ImageModal.module.css';

Modal.setAppElement('#root');

const ImageModal = ({ isOpen, onClose, photo }) => {
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  return (
    <div>
      <Modal
        isOpen={isOpen}
        onRequestClose={onClose}
        style={customStyles}
        className={css.modal}
        overlayClassName={css.overlay}
        contentLabel='Gallery photo view'
      >
        {photo && (
          <div className={css.imgContainer}>
            <img src={photo.urls.regular} alt={photo.alt_description} />
            <p>{photo.alt_description}</p>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ImageModal;
