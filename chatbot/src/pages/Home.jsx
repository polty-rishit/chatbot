import React, { useState } from 'react';
import Orb from '../Orb';

const App = () => {
  const [message, setMessage] = useState('');
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });
  
  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Left Sidebar */}
      <div className="w-16 bg-black border-r border-gray-800 flex flex-col items-center">
        <div className="py-6">
          <i className="fas fa-whale text-blue-500 text-2xl cursor-pointer"></i>
        </div>
        <div className="flex flex-col items-center space-y-8 mt-4">
          <button className="text-gray-400 hover:text-white transition-colors">
            <i className="fas fa-id-card text-xl"></i>
          </button>
          <button className="text-gray-400 hover:text-white transition-colors">
            <i className="fas fa-sync text-xl"></i>
          </button>
        </div>
        <div className="mt-auto mb-4 flex flex-col items-center space-y-8">
          <button className="text-gray-400 hover:text-white transition-colors">
            <i className="fas fa-mobile-alt text-xl"></i>
          </button>
          <div className="w-10 h-10 rounded-full bg-purple-600 flex items-center justify-center cursor-pointer">
            <span className="text-white font-medium">R</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Centered Orb with integrated text */}
        <div className="flex-1 flex flex-col items-center justify-center relative">
          <div style={{ width: '400px', height: '400px', position: 'relative' }}>
            <Orb
              hoverIntensity={0.5}
              rotateOnHover={true}
              hue={0} // Blue hue
              forceHoverState={false}
            />
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <h1 className="text-3xl font-bold text-white">Hi, I'm Sia</h1>
            </div>
          </div>
          <p className="text-gray-300 mt-4 -my-15">How can I help you today?</p>
        </div>

        {/* Input box at bottom */}
        <div className="p-6 w-full max-w-2xl mx-auto">
          <div className="relative w-full">
            <input
              type="text"
              value={message}
              onChange={handleMessageChange}
              placeholder="Message Sia"
              className="w-full bg-gray-900 border border-gray-700 rounded-lg py-3 px-4 pr-20 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <button className="text-gray-400 hover:text-white transition-colors">
                <i className="fas fa-paperclip"></i>
              </button>
              <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white hover:bg-blue-500 transition-colors">
                <i className="fas fa-arrow-up text-sm"></i>
              </button>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex mt-4 space-x-2">
            <button className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-full px-4 py-2 flex items-center space-x-2 cursor-pointer">
              <i className="fas fa-microchip"></i>
              <span>DeepThink (R1)</span>
            </button>
            <button className="bg-gray-800 hover:bg-gray-700 transition-colors rounded-full px-4 py-2 flex items-center space-x-2 cursor-pointer">
              <i className="fas fa-globe"></i>
              <span>Search</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="w-full flex justify-between items-center p-4 text-xs text-gray-500">
          <span>AI-generated, for reference only</span>
          <div className="flex flex-col items-end">
            <span>{formattedDate}</span>
            <span>Thu 21:51 (Local time)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;