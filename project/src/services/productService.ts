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
    name: 'Apple iPhone 15 (Black, 128 GB)',
    description: 'Experience the iPhone 15  your dynamic companion. Dynamic Island ensures you stay connected, bubbling up alerts seamlessly while you are busy. Its durable design features infused glass and aerospace-grade aluminum, making it dependable and resistant to water and dust. Capture life with precision using the 48 MP Main Camera, perfect for any shot. Powered by the A16 Bionic Processor, it excels in computational photography and more, all while conserving battery life. Plus, its USB-C compatible, simplifying your charging needs. Elevate your tech game with the iPhone 15  innovation at your fingertips. Goodbye cable clutter, hello convenience.',
    image: 'https://m.media-amazon.com/images/I/51brdXeugJL._SL1500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/71657TiFeHL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/712CBkmhLhL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81BnjSLm2oL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/61f4dTush1L._SL1500_.jpg'
    ],
    price: 59700,
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
        price: 59700,
        url: 'https://www.amazon.in/Apple-iPhone-15-128-GB/dp/B0CHX1W1XY/ref=sr_1_1_sspa?crid=3RHX7BT3BLPS&dib=eyJ2IjoiMSJ9.NFc5XS-FWFSbHsvsdcmAYFl17rHALpjDndzWbpNnG-V3bTAyHsjnQlRBVombFYdyThlxqpcAk2ahnjxScCdWEWEWyyuk6ylqoodWMIaC5mN8GG9zQzKT-N88-UhxYkZ4QREKTB9Ahj7VaVwDJbh44ns-tjVFAWgFlV0_TF0NO6gtAQkiOo9Xyzn1bABdbQ4J5uSa5hcpHq-QOBARFpxVGAttt5hsZm7TIHmdufOhk5Q.tWLe9TawhgWec50NONRBmOCOwkdnvIgZ_lHeTdpdKB0&dib_tag=se&keywords=Apple%2BiPhone%2B15&nsdOptOutParam=true&qid=1750234754&sprefix=apple%2Biphone%2B15p%2Caps%2C248&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1',
        logo: platformLogos['Amazon'],
        inStock: true,
        delivery: '1-2 days'
      },
      {
        name: 'Flipkart',
        price:64900,
        url: 'https://www.amazon.in/Apple-iPhone-15-128-GB/dp/B0CHX1W1XY/ref=sr_1_1_sspa?crid=3RHX7BT3BLPS&dib=eyJ2IjoiMSJ9.NFc5XS-FWFSbHsvsdcmAYFl17rHALpjDndzWbpNnG-V3bTAyHsjnQlRBVombFYdyThlxqpcAk2ahnjxScCdWEWEWyyuk6ylqoodWMIaC5mN8GG9zQzKT-N88-UhxYkZ4QREKTB9Ahj7VaVwDJbh44ns-tjVFAWgFlV0_TF0NO6gtAQkiOo9Xyzn1bABdbQ4J5uSa5hcpHq-QOBARFpxVGAttt5hsZm7TIHmdufOhk5Q.tWLe9TawhgWec50NONRBmOCOwkdnvIgZ_lHeTdpdKB0&dib_tag=se&keywords=Apple%2BiPhone%2B15&nsdOptOutParam=true&qid=1750234754&sprefix=apple%2Biphone%2B15p%2Caps%2C248&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1',
        logo: platformLogos['Flipkart'],
        inStock: true,
        delivery: '2-3 days'
      },
      {
        name: 'Apple Store',
        price: 69900,
        url: 'https://www.apple.com/in/shop/buy-iphone/iphone-15',
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
    image: 'https://m.media-amazon.com/images/I/819HePm8FRL._SL1500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/819HePm8FRL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81Jx9HjYt0L._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/71Mo2pzT4XL._SL1500_.jpg'
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
        price: 74999,
        url: 'https://www.amazon.in/Samsung-Phantom-Storage-Additional-Exchange/dp/B09SH994JW/ref=sr_1_1?crid=2OCH9LQYWFTZE&dib=eyJ2IjoiMSJ9.DjvH-Y7MvMop2OUXPIyXl4ov0cVRQ7HTn2gfZzql_aFs2pMlwFVukxq40GP3f95l3ncU11_UVY1KFi3-6FowPFtvm_EV_68G2KtQbfmfc2E_fiTS2uf-TAhpMGeh-5i1zFhXw6nCCaU_m6uXSQABa3w6FZYh490KpMli2_CJ_qdHT2lNKE1z-xCS_i5BEjnU8kFRXlXylWrS4NdLKbuBNRNn_-ig8dqePT5-I-LIfEM.K6rQCDRsZ30cv34SM_XHu0j3GoM4w-LQtwwx-laa_8A&dib_tag=se&keywords=Samsung+Galaxy+S22+Ultra+%28256GB%2C+Phantom+Black%29&nsdOptOutParam=true&qid=1750235645&sprefix=samsung+galaxy+s22+ultra+256gb%2C+phantom+black+%2Caps%2C317&sr=8-1',
        logo:platformLogos['Amazon'],
        inStock: true,
        delivery: '1-2 days'
      },
      {
        name: 'Flipkart',
        price: 82100,
        url: 'https://www.flipkart.com/samsung-galaxy-s22-ultra-5g-phantom-black-256-gb/p/itm7ca5bd1817da5?pid=MOBGGG2YA4MHBBZZ&lid=LSTMOBGGG2YA4MHBBZZ2YHC2U&marketplace=FLIPKART&q=Samsung+Galaxy+S22+Ultra+%28256GB%2C+Phantom+Black%29&store=tyy%2F4io&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=a8a031e6-260e-4bf7-8914-4c54bdfaa16d.MOBGGG2YA4MHBBZZ.SEARCH&ppt=pp&ppn=pp&ssid=g2e4z6n5gdit0l4w1750235638707&qH=a84beda182609008',
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
    image: 'https://m.media-amazon.com/images/I/613fjQtsd2L._SY695_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/613fjQtsd2L._SY695_.jpg',
      'https://m.media-amazon.com/images/I/61+q-uBq26L._SY695_.jpg',
      'https://m.media-amazon.com/images/I/71H7Yg3uMBL._SY695_.jpg'
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
        price: 12595,
        url: ' https://amzn.in/d/1SKTUqh ',
        logo: platformLogos['Amazon'],
        inStock: true,
        delivery: '2-3 days'
      },
      {
        name: 'Flipkart',
        price: 12595,
        url: 'https://www.flipkart.com/nike-air-max-270-sneakers-men/p/itm0b90787f8dd2f?pid=SHOGYHFQWAYWMU63&lid=LSTSHOGYHFQWAYWMU63GVOKKY&marketplace=FLIPKART&q=Nike+Air+Max+270+React&store=osp%2Fcil%2F1cu&srno=s_1_5&otracker=search&otracker1=search&fm=Search&iid=6e457666-7e58-4786-982a-60ec8586a5dd.SHOGYHFQWAYWMU63.SEARCH&ppt=sp&ppn=sp&ssid=uf8kb2xy9ug9tg5c1750235955296&qH=5b5d35d87f42a791',
        logo: platformLogos['Flipkart'],
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
    image: 'https://m.media-amazon.com/images/I/710KoJMG2lL._SL1500_.jpg',
    images: [
      'https://m.media-amazon.com/images/I/81v7TY+NCqL._SL1500_.jpg',
       'https://m.media-amazon.com/images/I/710KoJMG2lL._SL1500_.jpg',
      'https://m.media-amazon.com/images/I/81XvRzPpd7L._SL1500_.jpg'
    ],
    price: 8999,
    rating: 4.8,
    reviewCount: 3567,
    category: {
      id: 'home',
      name: 'Home & Kitchen',
      slug: 'home-kitchen',
      image: 'https://m.media-amazon.com/images/I/710KoJMG2lL._SL1500_.jpg',
      productCount: 9845
    },
    platforms: [
      {
        name: 'Amazon',
        price: 11999,
        url: 'https://www.amazon.in/Instant-Pot-Multi-Use-Programmable-Pressure/dp/B00FLYWNYQ/ref=sr_1_1_sspa?crid=2C23PQK91EQ64&dib=eyJ2IjoiMSJ9.2bTkAlQ1-EFEsdfcFbCM7RNRH14Mtx6J4YB1XnvjiBzEXRiEtbqu-UEYxpTcgQ-3vHPGmXP0YsbKbVnCzPOTX62c6Dy5fDtnwSDHm2y3uFqUNmiqSTXwYYzHjFlkHRSd_SWMrLPbmbf72A6i_T3coc45XZxdDXCLVMA0gEISsY6k67LzQTEvATngdl7EmaGtuMjjk0NL2KEZ8EdbM3GsepudOcNKlaYNgBHIb4qUd0o.AGI725jY5BxOlkDgaiYURCNB1vRvMbBashRuJZqI780&dib_tag=se&keywords=Instant%2BPot%2BDuo%2B7-in-1%2BElectric%2BPressure%2BCooker&qid=1750236406&sprefix=instant%2Bpot%2Bduo%2B7-in-1%2Belectric%2Bpressure%2Bcooker%2Caps%2C284&sr=8-1-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1',
        logo: platformLogos['Amazon'],
        inStock: true,
        delivery: '1-2 days'
      },
      {
        name: 'Flipkart',
        price: 11999,
        url: 'https://www.flipkart.com/instant-pot-duo-60-electric-pressure-cooker/p/itmeb20b0d6c4b7e?pid=ECKGF2GSEERHRUGZ&lid=LSTECKGF2GSEERHRUGZAGUNGC&marketplace=FLIPKART&q=Instant+Pot+Duo+7-in-1+Electric+Pressure+Cooker&store=j9e%2Fm38%2F9m9&srno=s_1_1&otracker=search&otracker1=search&fm=Search&iid=e51eee1a-fdfa-4ca7-8405-3c1b07e03861.ECKGF2GSEERHRUGZ.SEARCH&ppt=sp&ppn=sp&ssid=ezsq9dpchnghu0ow1750236412227&qH=375def6a1b54bcec',
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