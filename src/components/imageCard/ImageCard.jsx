import css from './ImageCard.module.css';

const ImageCard = ({ photo, onClick }) => {
  return (
    <div className={css.card}>
      <img
        src={photo.urls.small}
        alt={photo.alt_description}
        onClick={() => {
          onClick(photo);
        }}
      />
    </div>
  );
};

export default ImageCard;
