import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, TrendingDown, ExternalLink } from 'lucide-react';
import { Product } from '../../types/product';
import { useWishlistStore } from '../../store/wishlistStore';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { isInWishlist, addItem, removeItem } = useWishlistStore();
  const isWishlisted = isInWishlist(product.id);
  
  const toggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      removeItem(product.id);
    } else {
      addItem(product);
    }
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
      <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all hover:shadow-lg relative">
        {/* Wishlist button */}
        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 z-10 bg-white p-1.5 rounded-full shadow-md transition-transform hover:scale-110"
        >
          <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
        </button>
        
        {/* Product image */}
        <div className="relative h-48 bg-gray-100 overflow-hidden">
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
        <div className="p-4">
          <h3 className="text-gray-800 font-medium text-lg mb-1 line-clamp-2 group-hover:text-primary transition-colors">
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
          
          {/* Price comparison */}
          <div className="mb-3">
            <div className="flex items-baseline">
              <span className="text-2xl font-bold text-gray-800">₹{lowestPricePlatform.price.toLocaleString()}</span>
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
          
          {/* Platform comparison */}
          <div className="border-t border-gray-100 pt-3 mt-auto">
            <div className="text-xs text-gray-500 mb-2">Available on {product.platforms.length} platforms</div>
            <div className="flex space-x-2">
              {product.platforms.slice(0, 3).map((platform, index) => (
                <div key={index} className="w-8 h-8 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center">
                  <img
                    src={platform.logo}
                    alt={platform.name}
                    className="w-6 h-6 object-contain"
                  />
                </div>
              ))}
              {product.platforms.length > 3 && (
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-xs text-gray-500">
                  +{product.platforms.length - 3}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;