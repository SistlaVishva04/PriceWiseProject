import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { ProductSpecification } from '../../types/product';

interface ProductSpecificationsProps {
  specifications: ProductSpecification[];
}

const ProductSpecifications: React.FC<ProductSpecificationsProps> = ({ specifications }) => {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => 
      prev.includes(category) 
        ? prev.filter(c => c !== category) 
        : [...prev, category]
    );
  };

  // Group specifications by category
  const specsByCategory: Record<string, ProductSpecification[]> = {};
  specifications.forEach(spec => {
    if (!specsByCategory[spec.category]) {
      specsByCategory[spec.category] = [];
    }
    specsByCategory[spec.category].push(spec);
  });

  return (
    <div className="space-y-4">
      {Object.entries(specsByCategory).map(([category, specs]) => (
        <div key={category} className="border border-gray-200 rounded-lg overflow-hidden">
          <div 
            onClick={() => toggleCategory(category)}
            className="flex justify-between items-center p-4 bg-gray-50 cursor-pointer"
          >
            <h3 className="font-medium text-gray-800">{category}</h3>
            <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform ${expandedCategories.includes(category) ? 'rotate-180' : ''}`} />
          </div>
          
          {expandedCategories.includes(category) && (
            <div className="p-4 space-y-2">
              {specs.map((spec, index) => (
                <div key={index} className="flex py-2 border-b border-gray-100 last:border-0">
                  <div className="w-1/3 text-sm text-gray-500">{spec.name}</div>
                  <div className="w-2/3 text-sm text-gray-800">{spec.value}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default ProductSpecifications;