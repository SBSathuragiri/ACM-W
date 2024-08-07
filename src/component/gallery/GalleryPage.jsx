import React from 'react';
import '../gallery/GalleryPage.css';

const images = [
  require('../../assets/image1.jpg'),
  require('../../assets/image2.jpg'),
  require('../../assets/image3.jpg'),
  require('../../assets/image4.jpg'),
  require('../../assets/image5.jpg'),
  require('../../assets/image6.jpg'),

]


function Gallery() {
  return (
    <section>

    {/* web-view */}

      <div className="gallery web-view">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* mobile-view */}

      <div className="mobile-gallery mobile-view">
        {images.map((image, index) => (
          <div className="gallery-item" key={index}>
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
      </div>

    </section>
  );
}

export default Gallery;
