import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { useWishlistStore } from '../store/wishlistStore';
import ProductListItem from '../components/product/ProductListItem';

const WishlistPage = () => {
  const { items, clearWishlist } = useWishlistStore();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <Heart className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Your wishlist is empty</h1>
            <p className="text-gray-600 mb-8">
              Start adding items to your wishlist to keep track of products you love.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
            >
              <span>Browse Products</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">My Wishlist</h1>
            <button
              onClick={clearWishlist}
              className="text-gray-600 hover:text-red-500 transition-colors"
            >
              Clear Wishlist
            </button>
          </div>
          
          <div className="space-y-4">
            {items.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WishlistPage;