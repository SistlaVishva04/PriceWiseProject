import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Heart, Star, Share2, TrendingDown, ChevronRight, ShoppingCart, Shield, BarChart3, AlertCircle } from 'lucide-react';
import { getProductById } from '../services/productService';
import { Product, PlatformData } from '../types/product';
import { useCartStore } from '../store/cartStore';
import PriceHistoryChart from '../components/product/PriceHistoryChart';
import ProductImageGallery from '../components/product/ProductImageGallery';
import ProductSpecifications from '../components/product/ProductSpecifications';
import ProductReviews from '../components/product/ProductReviews';
import SimilarProducts from '../components/product/SimilarProducts';

const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('description');
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState<PlatformData | null>(null);
  const { addItem } = useCartStore();
  const [showAddedToCart, setShowAddedToCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) return;
      
      try {
        setIsLoading(true);
        const productData = await getProductById(id);
        setProduct(productData);
        
        // Set the platform with the lowest price as default
        if (productData.platforms.length > 0) {
          const lowestPricePlatform: PlatformData = productData.platforms.reduce(
            (lowest: PlatformData, current: PlatformData): PlatformData => {
              return current.price < lowest.price ? current : lowest;
            },
            productData.platforms[0]
          );
          
          setSelectedPlatform(lowestPricePlatform);
        }
      } catch (error) {
        console.error('Error fetching product:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted);
  };

  const handleAddToCart = () => {
    if (product && selectedPlatform) {
      addItem(product, selectedPlatform);
      setShowAddedToCart(true);
      setTimeout(() => setShowAddedToCart(false), 2000);
    }
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="h-96 bg-gray-200 animate-pulse rounded-lg"></div>
            <div className="space-y-4">
              <div className="h-8 bg-gray-200 animate-pulse rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 animate-pulse rounded w-1/2"></div>
              <div className="h-12 bg-gray-200 animate-pulse rounded w-1/3 mt-6"></div>
              <div className="space-y-2 mt-6">
                <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
                <div className="h-4 bg-gray-200 animate-pulse rounded"></div>
                <div className="h-4 bg-gray-200 animate-pulse rounded w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Product not found</h2>
        <p className="text-gray-600 mt-2">The product you're looking for doesn't exist or has been removed.</p>
        <Link to="/" className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-lg">
          Back to Home
        </Link>
      </div>
    );
  }

  // Calculate the highest price among all platforms
  const highestPrice = Math.max(...product.platforms.map(p => p.price));
  
  // Calculate savings if selected platform
  const savings = selectedPlatform ? highestPrice - selectedPlatform.price : 0;
  const savingsPercentage = selectedPlatform ? Math.round((savings / highestPrice) * 100) : 0;

  return (
    <div className="bg-gray-50">
      {/* Added to cart notification */}
      {showAddedToCart && (
        <div className="fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50 animate-fadeIn">
          Added to cart successfully!
        </div>
      )}

      <div className="container mx-auto px-4 py-6 md:py-12">
        {/* Breadcrumbs */}
        <nav className="mb-6">
          <ol className="flex items-center text-sm">
            <li>
              <Link to="/" className="text-gray-500 hover:text-primary">Home</Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
              <Link to={`/category/${product.category.slug}`} className="text-gray-500 hover:text-primary">
                {product.category.name}
              </Link>
            </li>
            <li className="flex items-center">
              <ChevronRight className="h-4 w-4 mx-1 text-gray-400" />
              <span className="text-gray-700 font-medium">{product.name}</span>
            </li>
          </ol>
        </nav>
        
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
              {/* Product Images */}
              <div>
                <ProductImageGallery images={product.images} />
              </div>
              
              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                  
                  <div className="flex items-center mb-4">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                        />
                      ))}
                      <span className="ml-2 text-sm text-gray-500">{product.rating} ({product.reviewCount} reviews)</span>
                    </div>
                  </div>
                </div>
                
                {/* Price comparison */}
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="flex justify-between items-start">
                    <div>
                      <span className="text-sm text-gray-500">Best price on</span>
                      <div className="flex items-center">
                        <span className="text-3xl font-bold text-gray-800">₹{selectedPlatform?.price.toLocaleString()}</span>
                        {highestPrice > (selectedPlatform?.price || 0) && (
                          <span className="ml-2 text-sm text-gray-500 line-through">
                            ₹{highestPrice.toLocaleString()}
                          </span>
                        )}
                      </div>
                      {savingsPercentage > 0 && (
                        <div className="flex items-center mt-1 text-accent">
                          <TrendingDown className="h-4 w-4 mr-1" />
                          <span className="text-sm font-medium">Save ₹{savings.toLocaleString()} ({savingsPercentage}%)</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <button 
                        onClick={toggleWishlist}
                        className={`p-2 rounded-full border ${isWishlisted ? 'border-red-200 bg-red-50' : 'border-gray-200 hover:bg-gray-50'} transition-colors`}
                      >
                        <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-400'}`} />
                      </button>
                      <button className="p-2 rounded-full border border-gray-200 hover:bg-gray-50 transition-colors">
                        <Share2 className="h-5 w-5 text-gray-400" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Platform selection */}
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-3">Available on {product.platforms.length} platforms</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {product.platforms.map((platform, index) => (
                      <div 
                        key={index}
                        onClick={() => setSelectedPlatform(platform)}
                        className={`border rounded-lg p-3 cursor-pointer transition-all ${
                          selectedPlatform?.name === platform.name 
                            ? 'border-primary bg-blue-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-gray-100 rounded-full overflow-hidden flex items-center justify-center mr-3">
                            <img
                              src={platform.logo}
                              alt={platform.name}
                              className="w-6 h-6 object-contain"
                            />
                          </div>
                          <div>
                            <div className="font-medium text-gray-800">{platform.name}</div>
                            <div className="flex items-center">
                              <span className="text-lg font-bold text-gray-800">₹{platform.price.toLocaleString()}</span>
                              {platform.price === Math.min(...product.platforms.map(p => p.price)) && (
                                <span className="ml-2 text-xs font-medium text-green-600 bg-green-100 px-1.5 py-0.5 rounded">
                                  Best Price
                                </span>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Buy and Cart buttons */}
                {selectedPlatform && (
                  <div className="pt-4">
                    <div className="flex gap-4">
                      <a 
                        href={selectedPlatform.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="flex-1 bg-accent hover:bg-accent/90 text-white font-medium py-3 px-6 rounded-lg transition-colors text-center"
                      >
                        <div className="flex items-center justify-center">
                          <ShoppingCart className="h-5 w-5 mr-2" />
                          <span>Buy from {selectedPlatform.name}</span>
                        </div>
                      </a>
                      <button
                        onClick={handleAddToCart}
                        className="flex-1 bg-primary hover:bg-primary/90 text-white font-medium py-3 px-6 rounded-lg transition-colors"
                      >
                        <div className="flex items-center justify-center">
                          <ShoppingCart className="h-5 w-5 mr-2" />
                          <span>Add to Cart</span>
                        </div>
                      </button>
                    </div>
                    <div className="flex items-center justify-center mt-3 text-xs text-gray-500">
                      <Shield className="h-4 w-4 mr-1" />
                      <span>Redirects to official {selectedPlatform.name} website</span>
                    </div>
                  </div>
                )}
                
                {/* Key features */}
                <div>
                  <h3 className="text-lg font-medium text-gray-800 mb-2">Key Features</h3>
                  <ul className="space-y-1 text-gray-600">
                    {product.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Price history chart */}
            <div className="p-6 border-t border-gray-100">
              <div className="flex items-center mb-4">
                <BarChart3 className="h-5 w-5 text-primary mr-2" />
                <h3 className="text-lg font-medium text-gray-800">Price History</h3>
              </div>
              <PriceHistoryChart productId={product.id} />
            </div>
          </div>
          
          {/* Tabs for additional information */}
          <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">
            <div className="border-b border-gray-200">
              <div className="flex overflow-x-auto">
                <button
                  onClick={() => setActiveTab('description')}
                  className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                    activeTab === 'description'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Description
                </button>
                <button
                  onClick={() => setActiveTab('specifications')}
                  className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                    activeTab === 'specifications'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Specifications
                </button>
                <button
                  onClick={() => setActiveTab('reviews')}
                  className={`px-6 py-3 text-sm font-medium whitespace-nowrap ${
                    activeTab === 'reviews'
                      ? 'text-primary border-b-2 border-primary'
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  Reviews ({product.reviewCount})
                </button>
              </div>
            </div>
            
            <div className="p-6">
              {activeTab === 'description' && (
                <div className="prose max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    {product.description}
                  </p>
                </div>
              )}
              
              {activeTab === 'specifications' && (
                <ProductSpecifications specifications={product.specifications} />
              )}
              
              {activeTab === 'reviews' && (
                <ProductReviews productId={product.id} />
              )}
            </div>
          </div>
          
          {/* Similar Products */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Similar Products</h2>
            <SimilarProducts productId={product.id} categoryId={product.category.id} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;