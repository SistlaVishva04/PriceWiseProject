import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, TrendingDown, ExternalLink } from 'lucide-react';
import { Product } from '../../types/product';

interface ProductListItemProps {
  product: Product;
}

const ProductListItem: React.FC<ProductListItemProps> = ({ product }) => {
  const [isWishlisted, setIsWishlisted] = useState(false);
  
  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted(!isWishlisted);
  };

  // Find lowest price platform
  const lowestPricePlatform = product.platforms.reduce((lowest, current) => {
    return current.price < lowest.price ? current : lowest;
  }, product.platforms[0]);

  // Calculate savings compared to highest price
  const highestPrice = Math.max(...product.platforms.map(p => p.price));
  const savings = highestPrice - lowestPricePlatform.price;
  const savingsPercentage = Math.round((savings / highestPrice) * 100);

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg flex">
        {/* Product image */}
        <div className="relative w-32 sm:w-48 bg-gray-100 flex-shrink-0">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Discount badge */}
          {savingsPercentage > 0 && (
            <div className="absolute top-3 left-3 bg-accent text-white text-xs font-bold px-2 py-1 rounded flex items-center">
              <TrendingDown className="h-3 w-3 mr-1" />
              {savingsPercentage}% OFF
            </div>
          )}
        </div>
        
        {/* Product details */}
        <div className="flex-grow p-4 flex flex-col justify-between">
          <div>
            <h3 className="text-gray-800 font-medium text-lg mb-1 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            
            {/* Rating */}
            <div className="flex items-center mb-2">
              <div className="flex items-center text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <span className="text-xs text-gray-500 ml-1">({product.reviewCount})</span>
            </div>
            
            {/* Short description */}
            <p className="text-sm text-gray-600 mb-3 line-clamp-2">
              {product.shortDescription || product.description.substring(0, 120) + '...'}
            </p>
          </div>
          
          <div className="flex items-end justify-between">
            {/* Price comparison */}
            <div>
              <div className="flex items-baseline">
                <span className="text-xl font-bold text-gray-800">₹{lowestPricePlatform.price.toLocaleString()}</span>
                {highestPrice > lowestPricePlatform.price && (
                  <span className="ml-2 text-sm text-gray-500 line-through">
                    ₹{highestPrice.toLocaleString()}
                  </span>
                )}
              </div>
              <div className="flex items-center mt-1">
                <span className="text-xs text-gray-500">Best price on</span>
                <span className="ml-1 text-sm font-medium text-primary">{lowestPricePlatform.name}</span>
              </div>
            </div>
            
            {/* Actions */}
            <div className="flex space-x-2">
              <button
                onClick={toggleWishlist}
                className={`p-2 rounded-full border ${isWishlisted ? 'border-red-200 bg-red-50' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
              </button>
              <a
                href={lowestPricePlatform.url}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="flex items-center bg-accent hover:bg-accent/90 text-white text-sm font-medium px-3 py-2 rounded transition-colors"
              >
                <span>View Deal</span>
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductListItem;