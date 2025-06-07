import React, { useEffect, useState } from 'react';
import { ThumbsUp, ThumbsDown, Star, Filter } from 'lucide-react';
import { getProductReviews } from '../../services/productService';
import { ProductReview } from '../../types/product';

interface ProductReviewsProps {
  productId: string;
}

const ProductReviews: React.FC<ProductReviewsProps> = ({ productId }) => {
  const [reviews, setReviews] = useState<ProductReview[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState<'all' | 'positive' | 'negative' | 'verified'>('all');
  const [sort, setSort] = useState<'recent' | 'helpful' | 'highest' | 'lowest'>('recent');
  
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        setIsLoading(true);
        const data = await getProductReviews(productId, { filter, sort });
        setReviews(data);
      } catch (error) {
        console.error('Error fetching reviews:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchReviews();
  }, [productId, filter, sort]);

  // Calculate rating distribution
  const ratingCounts = [0, 0, 0, 0, 0]; // 5 stars to 1 star
  reviews.forEach(review => {
    const ratingIndex = Math.floor(review.rating) - 1;
    if (ratingIndex >= 0 && ratingIndex < 5) {
      ratingCounts[ratingIndex]++;
    }
  });
  
  const totalReviews = reviews.length;
  const averageRating = totalReviews > 0 
    ? reviews.reduce((sum, review) => sum + review.rating, 0) / totalReviews 
    : 0;

  return (
    <div>
      {isLoading ? (
        <div className="space-y-4">
          <div className="h-24 bg-gray-100 animate-pulse rounded-lg"></div>
          <div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>
          <div className="h-32 bg-gray-100 animate-pulse rounded-lg"></div>
        </div>
      ) : (
        <>
          {/* Rating summary */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {/* Average rating */}
            <div className="flex flex-col items-center justify-center">
              <div className="text-5xl font-bold text-gray-800 mb-2">
                {averageRating.toFixed(1)}
              </div>
              <div className="flex items-center mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < Math.floor(averageRating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                  />
                ))}
              </div>
              <div className="text-sm text-gray-500">
                Based on {totalReviews} reviews
              </div>
            </div>
            
            {/* Rating distribution */}
            <div className="col-span-1 md:col-span-2">
              <div className="space-y-2">
                {[5, 4, 3, 2, 1].map((rating) => {
                  const count = ratingCounts[5 - rating];
                  const percentage = totalReviews > 0 ? (count / totalReviews) * 100 : 0;
                  
                  return (
                    <div key={rating} className="flex items-center">
                      <div className="flex items-center w-16">
                        <span className="text-sm text-gray-700">{rating}</span>
                        <Star className="h-4 w-4 ml-1 text-yellow-400 fill-yellow-400" />
                      </div>
                      <div className="flex-grow mx-2 bg-gray-200 rounded-full h-2.5">
                        <div 
                          className="bg-yellow-400 h-2.5 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <div className="w-12 text-right text-sm text-gray-500">
                        {count}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          
          {/* Filters and sorting */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-gray-200 pb-4">
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <span className="text-sm text-gray-700">Filter:</span>
              <div className="flex space-x-1">
                <button
                  onClick={() => setFilter('all')}
                  className={`px-3 py-1 text-xs rounded-full ${
                    filter === 'all'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setFilter('positive')}
                  className={`px-3 py-1 text-xs rounded-full ${
                    filter === 'positive'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Positive
                </button>
                <button
                  onClick={() => setFilter('negative')}
                  className={`px-3 py-1 text-xs rounded-full ${
                    filter === 'negative'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Critical
                </button>
                <button
                  onClick={() => setFilter('verified')}
                  className={`px-3 py-1 text-xs rounded-full ${
                    filter === 'verified'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  Verified
                </button>
              </div>
            </div>
            
            <div className="flex items-center">
              <label htmlFor="sort" className="text-sm text-gray-700 mr-2">Sort by:</label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as any)}
                className="text-sm border border-gray-300 rounded-md p-1.5 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              >
                <option value="recent">Most Recent</option>
                <option value="helpful">Most Helpful</option>
                <option value="highest">Highest Rated</option>
                <option value="lowest">Lowest Rated</option>
              </select>
            </div>
          </div>
          
          {/* Reviews list */}
          {reviews.length === 0 ? (
            <div className="text-center py-6">
              <p className="text-gray-500">No reviews found with the selected filters.</p>
            </div>
          ) : (
            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="border-b border-gray-100 pb-6 last:border-b-0">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < Math.floor(review.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <h4 className="font-medium text-gray-800 mt-1">{review.title}</h4>
                    </div>
                    <div className="text-sm text-gray-500">
                      {new Date(review.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'short',
                        day: 'numeric'
                      })}
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-2">
                    <span className="text-sm font-medium text-gray-700">{review.userName}</span>
                    {review.isVerified && (
                      <span className="ml-2 text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded">
                        Verified Purchase
                      </span>
                    )}
                    <span className="ml-2 text-xs bg-blue-100 text-blue-600 px-1.5 py-0.5 rounded">
                      {review.platform}
                    </span>
                  </div>
                  
                  <p className="text-gray-700 mb-3">{review.content}</p>
                  
                  {/* Helpfulness */}
                  <div className="flex items-center">
                    <button className="flex items-center text-sm text-gray-500 hover:text-gray-700">
                      <ThumbsUp className="h-4 w-4 mr-1" />
                      <span>Helpful ({review.helpfulCount})</span>
                    </button>
                    <button className="flex items-center text-sm text-gray-500 hover:text-gray-700 ml-4">
                      <ThumbsDown className="h-4 w-4 mr-1" />
                      <span>Not helpful</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default ProductReviews;