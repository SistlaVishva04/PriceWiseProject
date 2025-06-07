import React from 'react';
import { Link } from 'react-router-dom';
import { Category } from '../../types/product';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link 
      to={`/category/${category.slug}`}
      className="block rounded-lg overflow-hidden group transition-transform hover:scale-105"
    >
      <div className="relative">
        <div className="h-32 bg-gray-100">
          <img 
            src={category.image} 
            alt={category.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-3 text-white">
          <h3 className="font-medium text-sm md:text-base">{category.name}</h3>
          <p className="text-xs text-gray-200">{category.productCount} Products</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;