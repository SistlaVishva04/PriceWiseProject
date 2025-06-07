import React from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, X, ShoppingBag, ArrowRight } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const CartPage = () => {
  const { items, updateQuantity, removeItem, getTotalPrice, clearCart } = useCartStore();
  const totalPrice = getTotalPrice();

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto text-center">
            <ShoppingBag className="h-16 w-16 text-gray-400 mx-auto mb-6" />
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Your cart is empty</h1>
            <p className="text-gray-600 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link
              to="/"
              className="inline-flex items-center justify-center bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary-600 transition-colors"
            >
              <span>Start Shopping</span>
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
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Shopping Cart</h1>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden mb-8">
            <div className="p-6">
              {items.map((item) => (
                <div 
                  key={`${item.product.id}-${item.platform.name}`}
                  className="flex items-center py-6 border-b border-gray-200 last:border-0"
                >
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  
                  <div className="flex-grow ml-6">
                    <Link 
                      to={`/product/${item.product.id}`}
                      className="text-lg font-medium text-gray-800 hover:text-primary transition-colors"
                    >
                      {item.product.name}
                    </Link>
                    
                    <div className="flex items-center mt-2">
                      <div className="w-8 h-8 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center">
                        <img
                          src={item.platform.logo}
                          alt={item.platform.name}
                          className="w-6 h-6 object-contain"
                        />
                      </div>
                      <span className="ml-2 text-sm text-gray-500">{item.platform.name}</span>
                    </div>
                    
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center space-x-4">
                        <button
                          onClick={() => updateQuantity(item.product.id, item.platform.name, item.quantity - 1)}
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                        >
                          <Minus className="h-4 w-4 text-gray-600" />
                        </button>
                        
                        <span className="text-gray-800 font-medium">{item.quantity}</span>
                        
                        <button
                          onClick={() => updateQuantity(item.product.id, item.platform.name, item.quantity + 1)}
                          className="p-1 rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>
                      
                      <div className="flex items-center space-x-6">
                        <span className="text-lg font-bold text-gray-800">
                          ₹{(item.platform.price * item.quantity).toLocaleString()}
                        </span>
                        
                        <button
                          onClick={() => removeItem(item.product.id, item.platform.name)}
                          className="text-gray-400 hover:text-red-500 transition-colors"
                        >
                          <X className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-medium text-gray-800">Total</span>
                <span className="text-2xl font-bold text-gray-800">₹{totalPrice.toLocaleString()}</span>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={clearCart}
                  className="flex-1 px-6 py-3 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors text-center"
                >
                  Clear Cart
                </button>
                
                <Link
                  to="/checkout"
                  className="flex-1 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-600 transition-colors text-center"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;