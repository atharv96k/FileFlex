import React from 'react';
import { ArrowRight } from 'lucide-react';

const ToolCard = ({ tool, onClick }) => {
  const IconComponent = tool.icon;
  
  return (
    <div
      onClick={() => onClick(tool.id)}
      className="group cursor-pointer transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
    >
      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 h-full flex flex-col">
        {/* Icon with gradient background */}
        <div className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${tool.gradient} p-4 mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
          <div className="w-full h-full flex items-center justify-center">
            <IconComponent className="w-8 h-8 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="text-center flex-1 flex flex-col">
          <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-blue-600 transition-colors">
            {tool.title}
          </h3>
          <p className="text-gray-600 leading-relaxed flex-1 mb-4">
            {tool.description} 
          </p>
          
          {/* Call to action */}
          <div className="flex items-center justify-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
            <span>Get Started</span>
            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolCard;