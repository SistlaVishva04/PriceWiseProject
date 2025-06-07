import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <ShoppingCart className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold text-white">PriceWise</span>
            </div>
            <p className="text-sm">
              Find the best deals across multiple platforms. Compare prices, read reviews, and make informed purchasing decisions.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/categories" className="text-gray-400 hover:text-primary transition-colors">Categories</Link>
              </li>
              <li>
                <Link to="/deals" className="text-gray-400 hover:text-primary transition-colors">Today's Deals</Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/category/electronics" className="text-gray-400 hover:text-primary transition-colors">Electronics</Link>
              </li>
              <li>
                <Link to="/category/fashion" className="text-gray-400 hover:text-primary transition-colors">Fashion</Link>
              </li>
              <li>
                <Link to="/category/home" className="text-gray-400 hover:text-primary transition-colors">Home & Kitchen</Link>
              </li>
              <li>
                <Link to="/category/books" className="text-gray-400 hover:text-primary transition-colors">Books</Link>
              </li>
              <li>
                <Link to="/category/beauty" className="text-gray-400 hover:text-primary transition-colors">Beauty & Personal Care</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span>123 Commerce Street, Market City, MS 12345</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <span>support@pricewise.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-sm text-center md:flex md:justify-between md:text-left">
          <p>&copy; {new Date().getFullYear()} PriceWise. All rights reserved.</p>
          <div className="mt-2 md:mt-0 space-x-4">
            <Link to="/privacy" className="text-gray-400 hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="text-gray-400 hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;