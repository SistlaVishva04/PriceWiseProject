import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, ShoppingCart, Menu, X, Bell, Heart } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCartPreviewOpen, setIsCartPreviewOpen] = useState(false);
  const navigate = useNavigate();
  
  const { items, getTotalItems, getTotalPrice, removeItem } = useCartStore();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsCartPreviewOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsCartPreviewOpen(false);
  };

  const toggleCartPreview = () => {
    setIsCartPreviewOpen(!isCartPreviewOpen);
    setIsMobileMenuOpen(false);
  };

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          <Link 
            to="/" 
            className="flex items-center space-x-2"
          >
            <ShoppingCart className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold text-gray-800">PriceWise</span>
          </Link>

          <div className="hidden md:block flex-grow max-w-2xl mx-8">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
              />
              <button 
                type="submit" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary transition-colors"
              >
                <Search className="h-5 w-5" />
              </button>
            </form>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/wishlist" className="flex flex-col items-center text-gray-700 hover:text-primary transition-colors">
              <Heart className="h-6 w-6" />
              <span className="text-xs mt-1">Wishlist</span>
            </Link>
            <Link to="/notifications" className="flex flex-col items-center text-gray-700 hover:text-primary transition-colors">
              <Bell className="h-6 w-6" />
              <span className="text-xs mt-1">Alerts</span>
            </Link>
            <div className="relative">
              <button 
                onClick={toggleCartPreview}
                className="flex flex-col items-center text-gray-700 hover:text-primary transition-colors"
              >
                <div className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )}
                </div>
                <span className="text-xs mt-1">Cart</span>
              </button>

              {/* Cart Preview Dropdown */}
              {isCartPreviewOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Shopping Cart</h3>
                    {items.length === 0 ? (
                      <p className="text-gray-500 text-center py-4">Your cart is empty</p>
                    ) : (
                      <>
                        <div className="max-h-60 overflow-y-auto space-y-4">
                          {items.map((item) => (
                            <div key={`${item.product.id}-${item.platform.name}`} className="flex items-center space-x-4">
                              <img 
                                src={item.product.image} 
                                alt={item.product.name} 
                                className="w-16 h-16 object-cover rounded"
                              />
                              <div className="flex-1">
                                <h4 className="text-sm font-medium text-gray-800 line-clamp-1">{item.product.name}</h4>
                                <p className="text-sm text-gray-500">{item.platform.name}</p>
                                <div className="flex items-center justify-between mt-1">
                                  <span className="text-sm font-medium text-gray-800">
                                    ₹{item.platform.price.toLocaleString()} × {item.quantity}
                                  </span>
                                  <button
                                    onClick={() => removeItem(item.product.id, item.platform.name)}
                                    className="text-red-500 hover:text-red-600"
                                  >
                                    <X className="h-4 w-4" />
                                  </button>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="border-t border-gray-200 mt-4 pt-4">
                          <div className="flex justify-between text-sm font-medium text-gray-800">
                            <span>Total:</span>
                            <span>₹{totalPrice.toLocaleString()}</span>
                          </div>
                          <Link
                            to="/cart"
                            className="block w-full bg-primary text-white text-center py-2 rounded-lg mt-4 hover:bg-primary-600 transition-colors"
                            onClick={() => setIsCartPreviewOpen(false)}
                          >
                            View Cart
                          </Link>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <button 
            className="md:hidden text-gray-700"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile search bar */}
        <div className="md:hidden pb-3">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full py-2 pl-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-primary transition-colors"
            >
              <Search className="h-5 w-5" />
            </button>
          </form>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fadeIn z-50">
            <nav className="container mx-auto px-4 py-3">
              <ul className="space-y-4">
                <li>
                  <Link 
                    to="/cart" 
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <ShoppingCart className="h-5 w-5" />
                    <span>Cart ({totalItems})</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/wishlist" 
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Heart className="h-5 w-5" />
                    <span>Wishlist</span>
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/notifications" 
                    className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Bell className="h-5 w-5" />
                    <span>Price Alerts</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;