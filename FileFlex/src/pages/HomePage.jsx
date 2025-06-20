import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import ToolCard from '../components/ui/ToolCard';
import FeatureBadge from '../components/ui/FeatureBadge';
import { toolsData } from '../utils/toolsData';
import { useNavigate } from 'react-router-dom'; // Add this import

const HomePage = () => {
  const navigate = useNavigate(); 
  const handleToolClick = (toolId,title) => {
  switch (toolId) {
    case 'image-to-pdf':
      navigate('/image-to-pdf');
      break;
    case 'pdf-to-image':
      navigate('/pdf-to-image');
      break;
    case 'pdf-to-word':
      navigate('/pdf-to-word');
      break;
    case 'word-to-pdf':
      navigate('/word-to-pdf');
      break; 
    default:
      alert(`${title} tool page will be implemented next!`);
  }
};

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Header />
      
      {/* Hero Section */}
      <header className="py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
            <span className="bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent">
              FileFlex
            </span>
            <br />
            Made Simple
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Convert, edit, and manage your PDF documents with our free online tools. 
            Fast, secure, and easy to use.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <FeatureBadge color="green" text="100% Free" />
            <FeatureBadge color="blue" text="No Registration Required" />
            <FeatureBadge color="purple" text="Secure & Private" />
          </div>
        </div>
      </header>

      {/* Tools Grid */}
      <main className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Choose Your Tool
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Select from our collection of powerful PDF tools to get started
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
            {toolsData.map((tool) => (
              <ToolCard 
                key={tool.id} 
                tool={tool} 
                onClick={handleToolClick} 
              />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;