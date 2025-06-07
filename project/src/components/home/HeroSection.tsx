import React, { useState } from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <section className="relative bg-gradient-to-r from-blue-900 to-primary overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-repeat" 
             style={{backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")"}}></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight animate-fadeIn">
            Find the Best Deals Across All Platforms
          </h1>
          <p className="text-lg md:text-xl text-blue-100 mb-8 animate-fadeIn animation-delay-200">
            Compare prices from Amazon, Flipkart, Meesho and more in one place. 
            Save time and money with PriceWise.
          </p>
          
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto mb-10 animate-fadeIn animation-delay-400">
            <input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-6 py-4 rounded-full shadow-xl focus:outline-none focus:ring-2 focus:ring-accent text-gray-800 text-lg"
            />
            <button 
              type="submit" 
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
            >
              <Search className="h-6 w-6" />
            </button>
          </form>
          
          <div className="flex flex-wrap justify-center items-center gap-4 text-white animate-fadeIn animation-delay-600">
            <span className="text-sm md:text-base">Popular searches:</span>
            <a href="/search?q=smartphone" className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm hover:bg-opacity-30 transition-all">Smartphones</a>
            <a href="/search?q=laptop" className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm hover:bg-opacity-30 transition-all">Laptops</a>
            <a href="/search?q=headphones" className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm hover:bg-opacity-30 transition-all">Headphones</a>
            <a href="/search?q=smartwatch" className="bg-white bg-opacity-20 px-4 py-2 rounded-full text-sm hover:bg-opacity-30 transition-all">Smartwatches</a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-gray-50 to-transparent"></div>
    </section>
  );
};

export default HeroSection;