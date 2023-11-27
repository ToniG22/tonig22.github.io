import React, { useEffect, useState } from "react";

const Gallery = ({ galleryPath }) => {
  const [galleryImages, setGalleryImages] = useState([]); // Store the image URLs

  useEffect(() => {
    // Fetch the list of image files in the gallery folder
    fetchImages(galleryPath);
  }, [galleryPath]);

  // Function to fetch the list of image files in the gallery folder
  const fetchImages = (galleryPath) => {
    // Create an array of image URLs using a loop
    const imageUrls = [];
    for (let i = 1; i <= 6; i++) {
      const imageUrl = `${galleryPath}${i}.jpg`;
      imageUrls.push(imageUrl);
    }

    setGalleryImages(imageUrls);
  };

  return (
    <div>
      <div className="gallery">
        {galleryImages.map((imageUrl, index) => (
          <img key={index} src={imageUrl} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
