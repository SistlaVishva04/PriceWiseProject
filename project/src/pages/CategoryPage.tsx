import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import ProductListItem from '../components/product/ProductListItem';
import { searchProducts } from '../services/productService';
import { Product } from '../types/product';

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOption, setSortOption] = useState('relevance');
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setIsLoading(true);
        const results = await searchProducts('', {
          categories: [getCategoryName(slug)],
          sortBy: sortOption,
          priceRange
        });
        setProducts(results);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, [slug, sortOption, priceRange]);

  const getCategoryName = (slug?: string) => {
    switch (slug) {
      case 'electronics':
        return 'Electronics';
      case 'fashion':
        return 'Fashion';
      case 'home-kitchen':
        return 'Home & Kitchen';
      case 'books':
        return 'Books';
      case 'beauty':
        return 'Beauty';
      default:
        return '';
    }
  };

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">{getCategoryName(slug)}</h1>

        {/* Filters and sorting */}
        <div className="bg-white rounded-lg shadow-sm p-4 mb-6">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button 
              onClick={toggleFilters}
              className="flex items-center text-gray-700 hover:text-primary transition-colors"
            >
              <Filter className="h-5 w-5 mr-2" />
              <span className="font-medium">Filters</span>
              <ChevronDown className={`h-4 w-4 ml-1 transition-transform ${filtersOpen ? 'rotate-180' : ''}`} />
            </button>
            
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <label htmlFor="sort" className="text-sm text-gray-600 mr-2">Sort by:</label>
                <select
                  id="sort"
                  value={sortOption}
                  onChange={(e) => setSortOption(e.target.value)}
                  className="border border-gray-300 rounded-md text-sm p-1.5 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
                >
                  <option value="relevance">Relevance</option>
                  <option value="price_low">Price: Low to High</option>
                  <option value="price_high">Price: High to Low</option>
                  <option value="rating">Highest Rated</option>
                  <option value="discount">Biggest Discount</option>
                </select>
              </div>
              
              <button 
                onClick={toggleViewMode}
                className="p-1.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50 transition-colors"
              >
                {viewMode === 'grid' ? (
                  <List className="h-5 w-5" />
                ) : (
                  <Grid className="h-5 w-5" />
                )}
              </button>
            </div>
          </div>

          {filtersOpen && (
            <div className="mt-4 pt-4 border-t border-gray-200">
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium text-gray-800 mb-2">Price Range</h3>
                  <div className="flex items-center space-x-4">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}
                      className="w-32 p-2 border border-gray-300 rounded"
                    />
                    <span className="text-gray-500">to</span>
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                      className="w-32 p-2 border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Products */}
        {isLoading ? (
          <div className={`grid ${viewMode === 'grid' ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4' : 'grid-cols-1'} gap-6`}>
            {[...Array(8)].map((_, index) => (
              <div key={index} className="bg-white rounded-lg animate-pulse h-80"></div>
            ))}
          </div>
        ) : (
          <>
            {products.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No products found in this category.</p>
              </div>
            ) : (
              <div className={viewMode === 'grid' 
                ? 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6' 
                : 'space-y-4'
              }>
                {products.map((product) => (
                  viewMode === 'grid' ? (
                    <ProductCard key={product.id} product={product} />
                  ) : (
                    <ProductListItem key={product.id} product={product} />
                  )
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;