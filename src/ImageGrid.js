import React from "react";
import "./ImageGrid.css"; // Import CSS for styling

function ImageGrid({ images }) {
  return (
    <div className="image-grid">
      {images.map((image, index) => (
        <div key={index} className="image-container">
          <img src={image.src} alt={image.alt} className="grid-image" />
        </div>
      ))}
    </div>
  );
}

export default ImageGrid;
