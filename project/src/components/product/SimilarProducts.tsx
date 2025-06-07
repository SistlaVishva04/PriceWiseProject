import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { getSimilarProducts } from '../../services/productService';
import { Product } from '../../types/product';
import ProductCard from './ProductCard';

interface SimilarProductsProps {
  productId: string;
  categoryId: string;
}

const SimilarProducts: React.FC<SimilarProductsProps> = ({ productId, categoryId }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSimilarProducts = async () => {
      try {
        setIsLoading(true);
        const data = await getSimilarProducts(productId, categoryId);
        setProducts(data);
      } catch (error) {
        console.error('Error fetching similar products:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSimilarProducts();
  }, [productId, categoryId]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md animate-pulse h-80"></div>
        ))}
      </div>
    );
  }

  if (products.length === 0) {
    return null;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SimilarProducts;