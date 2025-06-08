// Mock data for frontend development
import { Product } from '../types/product';
import { Category } from '../types/product';
import { ProductReview } from '../types/product';
import { PriceHistoryPoint } from '../types/product';
import { SearchFilters } from '../types/product';
import amazonlogo from '../logos/amazonlogo.png';
import flipkartlogo from '../logos/flipkartlogo.png';
import meeshologo from '../logos/meeshologo.jpeg';
import myntra from '../logos/myntra.png';
import applestorelogo from '../logos/applestorelogo.png';
import nykaalogo from '../logos/nykaalogo.png';

const platformLogos: Record<string, string> = {
  Amazon: amazonlogo,
  Flipkart: flipkartlogo,
  Meesho: meeshologo,
  Myntra: myntra,
  AppleStore: applestorelogo,
  Nykaa: nykaalogo
};


const mockProducts: Product[] = [
  // Electronics Category
  {
    id: '1',
    name: 'Apple iPhone 13 Pro Max (256GB, Graphite)',
    description: 'The iPhone 13 Pro Max features a 6.7-inch Super Retina XDR display with ProMotion technology, a triple-camera system with new sensors, the A15 Bionic chip for lightning-fast performance, and incredible battery life—all in a durable design with Ceramic Shield.',
    image: 'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/5750001/pexels-photo-5750001.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/4071887/pexels-photo-4071887.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/5750000/pexels-photo-5750000.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    price: 129900,
    rating: 4.8,
    reviewCount: 3254,
    category: {
      id: 'electronics',
      name: 'Electronics',
      slug: 'electronics',
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1600',
      productCount: 8563
    },
    platforms: [
      {
        name: 'Amazon',
        price: 129900,
        url: 'https://www.amazon.in/Apple-iPhone-13-Pro-Max/dp/B09G9HD6PD',
        logo: platformLogos['Amazon'],
        inStock: true,
        delivery: '1-2 days'
      },
      {
        name: 'Flipkart',
        price: 129999,
        url: 'https://www.flipkart.com/apple-iphone-13-pro-max-graphite-256-gb/p/itm5a2928ba72a03',
        logo: platformLogos['Flipkart'],
        inStock: true,
        delivery: '2-3 days'
      },
      {
        name: 'Apple Store',
        price: 129900,
        url: 'https://www.apple.com/in/shop/buy-iphone/iphone-13-pro',
        logo: platformLogos['AppleStore'],
        inStock: true,
        delivery: 'Same day'
      }
    ],
    keyFeatures: [
      '6.7-inch Super Retina XDR display with ProMotion',
      'Cinematic mode in 1080p at 30 fps',
      'A15 Bionic chip with 6-core CPU and 5-core GPU',
      'Up to 28 hours of video playback',
      'Pro 12MP camera system (Telephoto, Wide, and Ultra Wide)',
      'Face ID for secure authentication'
    ],
    specifications: [
      {
        category: 'Display',
        name: 'Screen Size',
        value: '6.7 inches'
      },
      {
        category: 'Display',
        name: 'Resolution',
        value: '2778 x 1284 pixels at 458 ppi'
      },
      {
        category: 'Performance',
        name: 'Chip',
        value: 'A15 Bionic'
      }
    ]
  },
  {
    id: '2',
    name: 'Samsung Galaxy S22 Ultra (256GB, Phantom Black)',
    description: 'The Samsung Galaxy S22 Ultra combines the power of the Note series with the camera excellence of S series.',
    image: 'https://images.pexels.com/photos/13123937/pexels-photo-13123937.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/13123937/pexels-photo-13123937.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/9833470/pexels-photo-9833470.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    price: 109999,
    rating: 4.7,
    reviewCount: 2845,
    category: {
      id: 'electronics',
      name: 'Electronics',
      slug: 'electronics',
      image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1600',
      productCount: 8563
    },
    platforms: [
      {
        name: 'Amazon',
        price: 109999,
        url: 'https://www.amazon.in/Samsung-Galaxy-Ultra-Phantom-Storage/dp/B09SH7FDKT',
        logo:platformLogos['Amazon'],
        inStock: true,
        delivery: '1-2 days'
      },
      {
        name: 'Flipkart',
        price: 109999,
        url: 'https://www.flipkart.com/samsung-galaxy-s22-ultra-5g-phantom-black-256-gb/p/itm4a0d5d5386849',
        logo: platformLogos['Flipkart'],
        inStock: true,
        delivery: '2-3 days'
      }
    ],
    keyFeatures: [
      '6.8-inch Dynamic AMOLED 2X display',
      'S Pen included (embedded)',
      'Snapdragon 8 Gen 1 processor'
    ],
    specifications: [
      {
        category: 'Display',
        name: 'Screen Size',
        value: '6.8 inches'
      },
      {
        category: 'Performance',
        name: 'Processor',
        value: 'Snapdragon 8 Gen 1'
      }
    ]
  },
  // Fashion Category
  {
    id: '3',
    name: 'Nike Air Max 270 React',
    description: 'The Nike Air Max 270 React combines two of Nike\'s biggest innovations for cushioning.',
    image: 'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    price: 12995,
    rating: 4.5,
    reviewCount: 1256,
    category: {
      id: 'fashion',
      name: 'Fashion',
      slug: 'fashion',
      image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1600',
      productCount: 12458
    },
    platforms: [
      {
        name: 'Amazon',
        price: 12995,
        url: 'https://www.amazon.in/Nike-Air-Max-270-React/dp/B07TQNQV9M',
        logo: platformLogos['Amazon'],
        inStock: true,
        delivery: '2-3 days'
      },
      {
        name: 'Myntra',
        price: 12499,
        url: 'https://www.myntra.com/nike-air-max-270-react',
        logo: platformLogos['Myntra'],
        inStock: true,
        delivery: '3-4 days'
      }
    ],
    keyFeatures: [
      'Nike React foam midsole',
      'Max Air 270 unit in heel',
      'Lightweight and breathable'
    ],
    specifications: [
      {
        category: 'Material',
        name: 'Upper',
        value: 'Engineered mesh'
      },
      {
        category: 'Cushioning',
        name: 'Type',
        value: 'React foam + Air'
      }
    ]
  },
  // Home & Kitchen Category
  {
    id: '4',
    name: 'Instant Pot Duo 7-in-1 Electric Pressure Cooker',
    description: 'The Instant Pot Duo combines 7 appliances in one: pressure cooker, slow cooker, rice cooker, steamer, sauté pan, yogurt maker, and warmer.',
    image: 'https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/4109998/pexels-photo-4109998.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/4109999/pexels-photo-4109999.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    price: 8999,
    rating: 4.8,
    reviewCount: 3567,
    category: {
      id: 'home',
      name: 'Home & Kitchen',
      slug: 'home-kitchen',
      image: 'https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&w=1600',
      productCount: 9845
    },
    platforms: [
      {
        name: 'Amazon',
        price: 8999,
        url: 'https://www.amazon.in/Instant-Pot-Electric-Pressure-Cooker/dp/B00FLYWNYQ',
        logo: platformLogos['Amazon'],
        inStock: true,
        delivery: '1-2 days'
      },
      {
        name: 'Flipkart',
        price: 8799,
        url: 'https://www.flipkart.com/instant-pot-duo-7-in-1',
        logo: platformLogos['Flipkart'],
        inStock: true,
        delivery: '2-3 days'
      }
    ],
    keyFeatures: [
      '7-in-1 functionality',
      '6 quart capacity',
      '14 smart programs'
    ],
    specifications: [
      {
        category: 'General',
        name: 'Capacity',
        value: '6 Quart'
      },
      {
        category: 'Power',
        name: 'Wattage',
        value: '1000W'
      }
    ]
  },
  // Books Category
  {
    id: '5',
    name: 'Atomic Habits by James Clear',
    description: 'An easy & proven way to build good habits & break bad ones.',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/1370296/pexels-photo-1370296.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    price: 499,
    rating: 4.9,
    reviewCount: 5678,
    category: {
      id: 'books',
      name: 'Books',
      slug: 'books',
      image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1600',
      productCount: 25632
    },
    platforms: [
      {
        name: 'Amazon',
        price: 499,
        url: 'https://www.amazon.in/Atomic-Habits-James-Clear/dp/1847941834',
        logo: platformLogos['Amazon'],
        inStock: true,
        delivery: '1-2 days'
      },
      {
        name: 'Flipkart',
        price: 479,
        url: 'https://www.flipkart.com/atomic-habits/p/itm3e5ac71b7a0b4',
        logo: platformLogos['Flipkart'],
        inStock: true,
        delivery: '2-3 days'
      }
    ],
    keyFeatures: [
      'Hardcover',
      '320 pages',
      'International bestseller'
    ],
    specifications: [
      {
        category: 'Details',
        name: 'Format',
        value: 'Hardcover'
      },
      {
        category: 'Details',
        name: 'Pages',
        value: '320'
      }
    ]
  },
  // Beauty Category
  {
    id: '6',
    name: 'MAC Ruby Woo Lipstick',
    description: 'A vivid blue-red matte lipstick. MAC\'s iconic, game-changing lipstick shade.',
    image: 'https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=1600',
    images: [
      'https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=1600',
      'https://images.pexels.com/photos/3373747/pexels-photo-3373747.jpeg?auto=compress&cs=tinysrgb&w=1600'
    ],
    price: 1950,
    rating: 4.7,
    reviewCount: 2345,
    category: {
      id: 'beauty',
      name: 'Beauty',
      slug: 'beauty',
      image: 'https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=1600',
      productCount: 6521
    },
    platforms: [
      {
        name: 'Amazon',
        price: 1950,
        url: 'https://www.amazon.in/MAC-Matte-Lipstick-Ruby-Woo/dp/B00MG8WNRO',
        logo: platformLogos['Amazon'],
        inStock: true,
        delivery: '2-3 days'
      },
      {
        name: 'Nykaa',
        price: 1899,
        url: 'https://www.nykaa.com/mac-lipstick/p/6909',
        logo: platformLogos['Nykaa'],
        inStock: true,
        delivery: '3-4 days'
      }
    ],
    keyFeatures: [
      'Matte finish',
      'Long-wearing',
      'Iconic shade'
    ],
    specifications: [
      {
        category: 'Details',
        name: 'Finish',
        value: 'Matte'
      },
      {
        category: 'Details',
        name: 'Weight',
        value: '3g'
      }
    ]
  }
];

// Mock categories
const mockCategories: Category[] = [
  {
    id: 'electronics',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.pexels.com/photos/1649771/pexels-photo-1649771.jpeg?auto=compress&cs=tinysrgb&w=1600',
    productCount: 8563
  },
  {
    id: 'fashion',
    name: 'Fashion',
    slug: 'fashion',
    image: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1600',
    productCount: 12458
  },
  {
    id: 'home',
    name: 'Home & Kitchen',
    slug: 'home-kitchen',
    image: 'https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&w=1600',
    productCount: 9845
  },
  {
    id: 'books',
    name: 'Books',
    slug: 'books',
    image: 'https://images.pexels.com/photos/1370295/pexels-photo-1370295.jpeg?auto=compress&cs=tinysrgb&w=1600',
    productCount: 25632
  },
  {
    id: 'beauty',
    name: 'Beauty',
    slug: 'beauty',
    image: 'https://images.pexels.com/photos/3373746/pexels-photo-3373746.jpeg?auto=compress&cs=tinysrgb&w=1600',
    productCount: 6521
  }
];

// Service functions
export const getFeaturedProducts = async (): Promise<Product[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  return mockProducts;
};

export const getTrendingProducts = async (): Promise<Product[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  return mockProducts.slice().reverse();
};

export const getCategories = async (): Promise<Category[]> => {
  await new Promise(resolve => setTimeout(resolve, 500));
  return mockCategories;
};

export const getProductById = async (id: string): Promise<Product> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const product = mockProducts.find(p => p.id === id);
  if (!product) {
    throw new Error(`Product with ID ${id} not found`);
  }
  
  return product;
};

export const getProductReviews = async (
  productId: string, 
  options: { filter: string, sort: string }
): Promise<ProductReview[]> => {
  await new Promise(resolve => setTimeout(resolve, 800));
  
  let reviews = generateMockReviews(productId);
  
  if (options.filter === 'positive') {
    reviews = reviews.filter(review => review.rating >= 4);
  } else if (options.filter === 'negative') {
    reviews = reviews.filter(review => review.rating < 3);
  } else if (options.filter === 'verified') {
    reviews = reviews.filter(review => review.isVerified);
  }
  
  if (options.sort === 'recent') {
    reviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  } else if (options.sort === 'helpful') {
    reviews.sort((a, b) => b.helpfulCount - a.helpfulCount);
  } else if (options.sort === 'highest') {
    reviews.sort((a, b) => b.rating - a.rating);
  } else if (options.sort === 'lowest') {
    reviews.sort((a, b) => a.rating - b.rating);
  }
  
  return reviews;
};

// Helper function to generate mock reviews
const generateMockReviews = (productId: string): ProductReview[] => {
  return Array.from({ length: 12 }, (_, i) => ({
    id: `review-${productId}-${i + 1}`,
    productId,
    userName: `User${Math.floor(Math.random() * 1000)}`,
    rating: Math.random() * 3 + 2,
    title: [
      'Great product, highly recommend!',
      'Excellent value for money',
      'Good but has some flaws',
      'Better than expected',
      'Exactly as described'
    ][Math.floor(Math.random() * 5)],
    content: [
      'I\'ve been using this for a month now and I\'m very satisfied with its performance. The build quality is excellent and it works as advertised.',
      'This product exceeded my expectations. The features are impressive and it\'s very user-friendly.',
      'Pretty good overall, but there are a few minor issues. Could be better.',
      'After comparing several options, I settled on this one and I\'m glad I did.',
      'The product arrived on time and was exactly as described. Very happy with my purchase.'
    ][Math.floor(Math.random() * 5)],
    date: new Date(Date.now() - Math.floor(Math.random() * 30) * 24 * 60 * 60 * 1000).toISOString(),
    platform: ['Amazon', 'Flipkart', 'Myntra', 'Nykaa'][Math.floor(Math.random() * 4)],
    isVerified: Math.random() > 0.3,
    helpfulCount: Math.floor(Math.random() * 50)
  }));
};

export const getPriceHistory = async (
  productId: string,
  timeRange: string = '3m'
): Promise<PriceHistoryPoint[]> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const product = mockProducts.find(p => p.id === productId);
  if (!product) return [];
  
  const today = new Date();
  let days = timeRange === '1m' ? 30 : timeRange === '3m' ? 90 : timeRange === '6m' ? 180 : 365;
  
  return Array.from({ length: Math.min(days, 50) }, (_, i) => {
    const date = new Date();
    date.setDate(today.getDate() - Math.floor((days / 50) * (50 - i)));
    
    const randomFactor = 0.9 + (Math.random() * 0.2);
    const trendFactor = 1 + ((i / 50) * 0.1);
    
    return {
      date: date.toISOString(),
      price: Math.round((product.price * randomFactor * trendFactor) / 100) * 100,
      platform: product.platforms[Math.floor(Math.random() * product.platforms.length)].name
    };
  });
};

export const getSimilarProducts = async (
  productId: string,
  categoryId: string
): Promise<Product[]> => {
  await new Promise(resolve => setTimeout(resolve, 1200));
  
  return mockProducts
    .filter(product => product.category.id === categoryId && product.id !== productId)
    .slice(0, 4);
};

export const searchProducts = async (
  query: string,
  filters: SearchFilters = {}
): Promise<Product[]> => {
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  let results = [...mockProducts];
  
  if (filters.priceRange) {
    const [min, max] = filters.priceRange;
    results = results.filter(product => product.price >= min && product.price <= max);
  }
  
  if (filters.categories && filters.categories.length > 0) {
    results = results.filter(product => 
      filters.categories?.includes(product.category.name)
    );
  }
  
  if (filters.brands && filters.brands.length > 0) {
    results = results.slice(0, filters.brands.length * 2);
  }
  
 if (filters.minRating !== undefined) {
  results = results.filter(product => product.rating >= filters.minRating!);
}

  
  if (filters.sortBy === 'price_low') {
    results.sort((a, b) => a.price - b.price);
  } else if (filters.sortBy === 'price_high') {
    results.sort((a, b) => b.price - a.price);
  } else if (filters.sortBy === 'rating') {
    results.sort((a, b) => b.rating - a.rating);
  } else if (filters.sortBy === 'discount') {
    results.sort(() => Math.random() - 0.5);
  }
  
  return results;
};