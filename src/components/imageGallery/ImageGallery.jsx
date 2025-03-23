import { forwardRef } from 'react';
import ImageCard from '../imageCard/ImageCard';
import css from './ImageGallery.module.css';

const ImageGallery = forwardRef((props, ref) => {
  const { photos, onClick } = props;

  return (
    <ul className={css.gallery} ref={ref}>
      {photos.map(photo => (
        <li key={photo.id}>
          <ImageCard photo={photo} onClick={onClick} />
        </li>
      ))}
    </ul>
  );
});

ImageGallery.displayName = 'ImageGallery';

export default ImageGallery;
