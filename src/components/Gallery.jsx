import React, { useEffect, useState } from "react";

const Gallery = ({ galleryPath }) => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchImages(galleryPath);
  }, [galleryPath]);

  const fetchImages = (galleryPath) => {
    const imageUrls = [];
    for (let i = 1; i <= 6; i++) {
      const imageUrl = `${galleryPath}/${i}.jpg`;
      imageUrls.push(imageUrl);
    }

    setGalleryImages(imageUrls);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? galleryImages.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === galleryImages.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {galleryImages.map((imageUrl, index) => (
          <div className="slide" key={index}>
            <img src={imageUrl} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="carouselButtons">
        <button className="PrevButton" onClick={handlePrev}> <img src="../src/assets/LeftIcon.png"/> <span>Prev</span>  </button>
        <button className="NextButton" onClick={handleNext}> <span>Next</span> <img src="../src/assets/RightIcon.png"/> </button>
      </div>
    </div>
  );
};

export default Gallery;
