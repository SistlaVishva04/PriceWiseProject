import React from 'react';
import { Search, BarChart3, Bell, ThumbsUp } from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-primary" />,
      title: 'Compare Prices Instantly',
      description: 'See prices from multiple platforms side by side and find the best deals in seconds.'
    },
    {
      icon: <BarChart3 className="h-10 w-10 text-primary" />,
      title: 'Price History Tracking',
      description: 'View price trends over time to determine if now is the right time to buy.'
    },
    {
      icon: <Bell className="h-10 w-10 text-primary" />,
      title: 'Price Drop Alerts',
      description: 'Get notified when products you\'re watching drop in price so you never miss a deal.'
    },
    {
      icon: <ThumbsUp className="h-10 w-10 text-primary" />,
      title: 'Verified Reviews',
      description: 'Read authentic reviews aggregated from multiple sources to make informed decisions.'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Why Choose PriceWise</h2>
          <p className="text-gray-600">
            We help you make smarter shopping decisions with our comprehensive comparison tools
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 inline-block p-3 bg-blue-50 rounded-lg">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;