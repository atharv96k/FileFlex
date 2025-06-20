import React from 'react';

const FeatureBadge = ({ color, text }) => {
  return (
    <div className={`flex items-center text-${color}-600 font-medium`}>
      <div className={`w-2 h-2 bg-${color}-500 rounded-full mr-2`}></div>
      {text}
    </div>
  );
};

export default FeatureBadge;