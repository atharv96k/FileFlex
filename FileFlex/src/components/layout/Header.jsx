import React, { useState } from 'react';
import { FileText, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-red-500 to-blue-500 p-2 rounded-lg">
              <FileText className="w-6 h-6 text-white" />
            </div>
            <Link to="/"className="text-xl font-bold text-gray-800">FileFlex</Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              About
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">
              Contact
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 p-2"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 py-4">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">
                About
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-blue-600 font-medium px-4 py-2">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;