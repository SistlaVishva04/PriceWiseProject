import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100">
          <Search className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h1>
        <p className="text-lg text-gray-600 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            to="/" 
            className="px-6 py-3 bg-primary text-white font-medium rounded-lg hover:bg-primary/90 transition-colors"
          >
            Back to Home
          </Link>
          <Link 
            to="/search" 
            className="px-6 py-3 bg-white text-gray-700 font-medium rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors"
          >
            Search Products
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;