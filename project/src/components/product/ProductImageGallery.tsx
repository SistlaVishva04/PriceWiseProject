import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface ProductImageGalleryProps {
  images: string[];
}

const ProductImageGallery: React.FC<ProductImageGalleryProps> = ({ images }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const handleThumbnailClick = (index: number) => {
    setActiveIndex(index);
    setIsZoomed(false);
  };

  const handlePrevImage = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    setIsZoomed(false);
  };

  const handleNextImage = () => {
    setActiveIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    setIsZoomed(false);
  };

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;

    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomPosition({ x, y });
  };

  return (
    <div className="space-y-4">
      {/* Main image */}
      <div 
        className="relative bg-gray-100 rounded-lg overflow-hidden h-72 sm:h-96 flex items-center justify-center"
        onMouseMove={handleMouseMove}
        onClick={toggleZoom}
      >
        <div 
          className={`w-full h-full transition-all duration-300 ${isZoomed ? 'cursor-zoom-out' : 'cursor-zoom-in'}`}
          style={{
            backgroundImage: `url(${images[activeIndex]})`,
            backgroundPosition: isZoomed ? `${zoomPosition.x}% ${zoomPosition.y}%` : 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: isZoomed ? '200%' : 'contain',
          }}
        ></div>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handlePrevImage();
          }}
          className="absolute left-2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-1.5 text-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            handleNextImage();
          }}
          className="absolute right-2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-1.5 text-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
        
        <button 
          onClick={(e) => {
            e.stopPropagation();
            toggleZoom();
          }}
          className="absolute bottom-2 right-2 bg-white bg-opacity-75 hover:bg-opacity-100 rounded-full p-1.5 text-gray-800 transition-all focus:outline-none focus:ring-2 focus:ring-primary"
        >
          <ZoomIn className="h-5 w-5" />
        </button>
      </div>
      
      {/* Thumbnails */}
      <div className="flex space-x-2 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => handleThumbnailClick(index)}
            className={`w-16 h-16 sm:w-20 sm:h-20 flex-shrink-0 rounded border-2 overflow-hidden transition-all ${
              index === activeIndex ? 'border-primary' : 'border-transparent hover:border-gray-300'
            }`}
          >
            <img 
              src={image} 
              alt={`Product thumbnail ${index + 1}`}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductImageGallery;