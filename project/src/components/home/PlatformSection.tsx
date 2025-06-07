
const PlatformSection = () => {
  const platforms = [
    { 
      name: 'Amazon', 
      logo: 'https://images.pexels.com/photos/7010427/pexels-photo-7010427.jpeg?auto=compress&cs=tinysrgb&w=1600',
      products: '50M+',
      dealsRefresh: 'Hourly'
    },
    { 
      name: 'Flipkart', 
      logo: 'https://images.pexels.com/photos/5875866/pexels-photo-5875866.jpeg?auto=compress&cs=tinysrgb&w=1600',
      products: '30M+',
      dealsRefresh: 'Daily'
    },
    { 
      name: 'Meesho', 
      logo: 'https://www.google.com/imgres?q=meesho%20logo&imgurl=https%3A%2F%2Fimages.moneycontrol.com%2Fstatic-mcnews%2F2023%2F06%2FMeesho-682x435.jpg&imgrefurl=https%3A%2F%2Fwww.moneycontrol.com%2Fnews%2Fbusiness%2Fmeesho-unveils-new-logo-to-appeal-to-wider-audience-10763441.html&docid=BKqmmIZReyBeQM&tbnid=3cp3WvMEMXFp5M&vet=12ahUKEwjRj_-ZiN-NAxXWxjgGHZrhJ0QQM3oECGYQAA..i&w=682&h=435&hcb=2&ved=2ahUKEwjRj_-ZiN-NAxXWxjgGHZrhJ0QQM3oECGYQAA',
      products: '15M+',
      dealsRefresh: 'Daily'
    },
    { 
      name: 'Myntra', 
      logo: 'https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1600',
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