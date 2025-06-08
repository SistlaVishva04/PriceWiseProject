import flipkartlogo from '../../logos/flipkartlogo.png';
import amazonlogo from '../../logos/amazonlogo.png';
import meeshologo from '../../logos/meeshologo.jpeg';
import myntra from '../../logos/myntra.png';

const PlatformSection = () => {
  const platforms = [
    { 
      name: 'Amazon', 
      logo: amazonlogo,
      products: '50M+',
      dealsRefresh: 'Hourly'
    },
    { 
      name: 'Flipkart', 
      logo: flipkartlogo,
      products: '30M+',
      dealsRefresh: 'Daily'
    },
    { 
      name: 'Meesho', 
      logo: meeshologo,
      products: '15M+',
      dealsRefresh: 'Daily'
    },
    { 
      name: 'Myntra', 
      logo: myntra,
      products: '20M+',
      dealsRefresh: 'Weekly'
    }
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Platforms We Compare</h2>
          <p className="text-gray-600">
            We analyze prices across all major e-commerce platforms to find you the best deals
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transition-transform hover:scale-105"
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-gray-200 overflow-hidden">
                <img 
                  src={platform.logo} 
                  alt={`${platform.name} logo`} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{platform.name}</h3>
              <div className="mt-auto pt-4 w-full">
                <div className="flex justify-between text-sm text-gray-500 border-t border-gray-100 pt-3">
                  <span>Products:</span>
                  <span className="font-medium">{platform.products}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-500 pt-1">
                  <span>Updates:</span>
                  <span className="font-medium">{platform.dealsRefresh}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;