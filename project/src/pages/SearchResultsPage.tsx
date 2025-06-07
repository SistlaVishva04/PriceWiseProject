import  { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Search, Filter, SlidersHorizontal, Grid, List, ChevronDown, ArrowUpDown } from 'lucide-react';
import ProductCard from '../components/product/ProductCard';
import ProductListItem from '../components/product/ProductListItem';
import { searchProducts } from '../services/productService';
import { Product } from '../types/product';

const SearchResultsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [sortOption, setSortOption] = useState('relevance');
  
  // Filter states
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100000]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minRating, setMinRating] = useState(0);

  useEffect(() => {
    const fetchResults = async () => {
      if (!query) return;
      
      try {
        setIsLoading(true);
        const results = await searchProducts(query, {
          sortBy: sortOption,
          priceRange,
          categories: selectedCategories,
          brands: selectedBrands,
          minRating
        });
        setProducts(results);
      } catch (error) {
        console.error('Error searching products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [query, sortOption, priceRange, selectedCategories, selectedBrands, minRating]);

  const toggleViewMode = () => {
    setViewMode(viewMode === 'grid' ? 'list' : 'grid');
  };

  const toggleFilters = () => {
    setFiltersOpen(!filtersOpen);
  };

  // Function to update price range
  const handlePriceChange = (min: number, max: number) => {
    setPriceRange([min, max]);
  };

  // Function to toggle category selection
  const toggleCategory = (category: string) => {
    setSelectedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  // Function to toggle brand selection
  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand) 
        : [...prev, brand]
    );
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        {/* Search header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            Search results for: <span className="text-primary">"{query}"</span>
          </h1>
          <p className="text-gray-600 mt-1">
            {isLoading ? 'Searching...' : `Found ${products.length} products`}
          </p>
        </div>
        
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
          
          {/* Expandable filters */}
          {filtersOpen && (
            <div className="mt-4 pt-4 border-t border-gray-200 grid grid-cols-1 md:grid-cols-4 gap-6">
              {/* Price range */}
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Price Range</h3>
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">₹{priceRange[0].toLocaleString()}</span>
                    <span className="text-sm text-gray-600">₹{priceRange[1].toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="100000"
                    step="1000"
                    value={priceRange[1]}
                    onChange={(e) => handlePriceChange(priceRange[0], parseInt(e.target.value))}
                    className="w-full"
                  />
                  <div className="flex space-x-2">
                    <input
                      type="number"
                      placeholder="Min"
                      value={priceRange[0]}
                      onChange={(e) => handlePriceChange(parseInt(e.target.value), priceRange[1])}
                      className="w-full p-2 text-sm border border-gray-300 rounded"
                    />
                    <input
                      type="number"
                      placeholder="Max"
                      value={priceRange[1]}
                      onChange={(e) => handlePriceChange(priceRange[0], parseInt(e.target.value))}
                      className="w-full p-2 text-sm border border-gray-300 rounded"
                    />
                  </div>
                </div>
              </div>
              
              {/* Categories */}
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Categories</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Beauty', 'Toys', 'Sports'].map((category) => (
                    <label key={category} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedCategories.includes(category)}
                        onChange={() => toggleCategory(category)}
                        className="rounded text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700">{category}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Brands */}
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Brands</h3>
                <div className="space-y-2 max-h-48 overflow-y-auto">
                  {['Apple', 'Samsung', 'Sony', 'Bose', 'Dell', 'LG', 'Nike', 'Adidas'].map((brand) => (
                    <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="rounded text-primary focus:ring-primary"
                      />
                      <span className="text-sm text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
              
              {/* Ratings */}
              <div>
                <h3 className="font-medium text-gray-800 mb-3">Minimum Rating</h3>
                <div className="space-y-2">
                  {[4, 3, 2, 1].map((rating) => (
                    <label key={rating} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="rating"
                        checked={minRating === rating}
                        onChange={() => setMinRating(rating)}
                        className="rounded-full text-primary focus:ring-primary"
                      />
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                        <span className="text-sm text-gray-700 ml-1">& Up</span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
        
        {/* Products grid/list */}
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
                <div className="mb-4">
                  <Search className="h-12 w-12 mx-auto text-gray-400" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">No products found</h2>
                <p className="text-gray-600 mb-6">
                  We couldn't find any products matching your search and filters.
                </p>
                <button 
                  onClick={() => {
                    setPriceRange([0, 100000]);
                    setSelectedCategories([]);
                    setSelectedBrands([]);
                    setMinRating(0);
                    setSortOption('relevance');
                  }}
                  className="text-primary hover:underline"
                >
                  Clear all filters
                </button>
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

// Star component for ratings
const Star = ({ className }: { className?: string }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export default SearchResultsPage;