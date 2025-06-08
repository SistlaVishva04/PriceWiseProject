import  { useState, useEffect } from 'react';
import { ArrowRight, TrendingUp, ThumbsUp, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product/ProductCard';
import CategoryCard from '../components/category/CategoryCard';
import { getFeaturedProducts, getTrendingProducts, getCategories } from '../services/productService';
import { Product, Category } from '../types/product';
import HeroSection from '../components/home/HeroSection';
import PlatformSection from '../components/home/PlatformSection';
import FeaturesSection from '../components/home/FeaturesSection';

const HomePage = () => {
  const [featuredProducts, setFeaturedProducts] = useState<Product[]>([]);
  const [trendingProducts, setTrendingProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<Category[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const [featuredData, trendingData, categoriesData] = await Promise.all([
          getFeaturedProducts(),
          getTrendingProducts(),
          getCategories()
        ]);
        
        setFeaturedProducts(featuredData);
        setTrendingProducts(trendingData);
        setCategories(categoriesData);
      } catch (error) {
        console.error('Error fetching homepage data:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="bg-gray-50">
      <HeroSection />

      {/* Featured Categories */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Shop by Category</h2>
            <Link to="/categories" className="text-primary flex items-center hover:underline">
              <span>View all</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[...Array(6)].map((_, index) => (
                <div key={index} className="bg-gray-200 rounded-lg animate-pulse h-40"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {categories.map(category => (
                <CategoryCard key={category.id} category={category} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Best Deals Across Platforms */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Best Deals Across Platforms</h2>
              <p className="text-gray-600 mt-2">Compare prices and save big on popular products</p>
            </div>
            <Link to="/deals" className="text-primary flex items-center hover:underline">
              <span>View all deals</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-gray-200 rounded-lg animate-pulse h-80"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Platforms We Compare */}
      <PlatformSection />

      {/* Why Choose Us */}
      <FeaturesSection />

      {/* Trending Products */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <div className="flex items-center">
                <TrendingUp className="h-6 w-6 text-accent mr-2" />
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800">Trending Now</h2>
              </div>
              <p className="text-gray-600 mt-2">Popular products with the biggest price drops</p>
            </div>
            <Link to="/trending" className="text-primary flex items-center hover:underline">
              <span>View all</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(4)].map((_, index) => (
                <div key={index} className="bg-gray-200 rounded-lg animate-pulse h-80"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {trendingProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">Get Notified About Price Drops</h2>
            <p className="text-gray-100 mb-8">Subscribe to our newsletter and we'll send you alerts when products you're interested in drop in price.</p>
            <form className="flex flex-col sm:flex-row max-w-lg mx-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="flex-grow px-4 py-3 rounded-l-lg sm:rounded-r-none mb-2 sm:mb-0 focus:outline-none"
              />
              <button 
                type="submit" 
                className="bg-accent text-white px-6 py-3 rounded-r-lg sm:rounded-l-none font-medium hover:bg-opacity-90 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;