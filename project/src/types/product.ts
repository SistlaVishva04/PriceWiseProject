export interface Product {
  id: string;
  name: string;
  description: string;
  shortDescription?: string;
  image: string;
  images: string[];
  price: number;
  rating: number;
  reviewCount: number;
  category: Category;
  platforms: PlatformData[];
  keyFeatures: string[];
  specifications: ProductSpecification[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
  productCount: number;
}

export interface PlatformData {
  name: string;
  price: number;
  url: string;
  logo: string;
  inStock: boolean;
  delivery?: string;
  condition?: string;
}

export interface ProductSpecification {
  category: string;
  name: string;
  value: string;
}

export interface ProductReview {
  id: string;
  productId: string;
  userName: string;
  rating: number;
  title: string;
  content: string;
  date: string;
  platform: string;
  isVerified: boolean;
  helpfulCount: number;
}

export interface PriceHistoryPoint {
  date: string;
  price: number;
  platform: string;
}

export interface SearchFilters {
  sortBy?: string;
  priceRange?: [number, number];
  categories?: string[];
  brands?: string[];
  minRating?: number;
}