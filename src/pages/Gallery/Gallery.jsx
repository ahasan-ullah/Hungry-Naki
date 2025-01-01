import React, { useState } from "react";
import "yet-another-react-lightbox/styles.css";
import Lightbox from "yet-another-react-lightbox";
import image1 from '../../assets/gallery/image1.jpg'
import image2 from '../../assets/gallery/image2.jpg'
import image3 from '../../assets/gallery/image3.jpg'
import image4 from '../../assets/gallery/image4.jpg'
import image5 from '../../assets/gallery/image5.jpg'
import image6 from '../../assets/gallery/image6.jpg'
import image7 from '../../assets/gallery/image7.jpg'
import image8 from '../../assets/gallery/image8.jpg'
import image9 from '../../assets/gallery/image9.jpg'
import image10 from '../../assets/gallery/image10.jpg'

const Gallery = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    image1,image2,image3,image4,image5,image6,image7,image8,image9,image10
  ];

  const handleImageClick = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center mt-5">
      {/* Page Title */}
      <h1 className="text-5xl font-bold mb-10">
        Welcome to the Gallery
      </h1>

      {/* Gallery Section */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 max-w-5xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="group relative cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={image}
              alt={`Gallery Image ${index + 1}`}
              className="rounded-md object-cover w-full h-48 transition duration-300 transform hover:scale-105"
            />
          </div>
        ))}
      </div>
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          slides={images.map((src) => ({ src }))}
          index={currentIndex}
        />
      )}
    </div>
  );
};
export default Gallery;
