
import React from 'react';
import { cn } from '@/lib/utils';

interface ChaiStallProps {
  isPlaying: boolean;
}

const ChaiStall: React.FC<ChaiStallProps> = ({ isPlaying }) => {
  return (
    <div className="relative bg-gradient-to-b from-amber-800 to-amber-900 rounded-3xl p-8 shadow-2xl overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      {/* Stall Counter */}
      <div className="relative z-10">
        <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-6 mb-6">
          <h2 className="text-3xl font-bold text-white text-center mb-4">
            🏪 Dolly's Chai Counter 🏪
          </h2>
          
          {/* Chai Making Area */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {/* Gas Stove */}
            <div className="relative">
              <div className="w-20 h-20 bg-gray-800 rounded-full mx-auto relative">
                <div className={cn(
                  "absolute inset-2 rounded-full transition-all duration-500",
                  isPlaying ? "bg-blue-400 animate-pulse" : "bg-gray-600"
                )}>
                  <div className="absolute inset-1 rounded-full bg-gray-900"></div>
                </div>
                {isPlaying && (
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className="text-red-400 animate-bounce"
                        style={{ animationDelay: `${i * 0.2}s` }}
                      >
                        🔥
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <p className="text-white text-center mt-2">Gas Stove</p>
            </div>

            {/* Chai Pot */}
            <div className="relative">
              <div className={cn(
                "w-16 h-20 bg-gradient-to-b from-gray-600 to-gray-800 rounded-b-full mx-auto relative transition-all duration-500",
                isPlaying && "animate-bounce"
              )}>
                <div className="w-12 h-3 bg-gray-700 rounded-full absolute -top-1 left-1/2 transform -translate-x-1/2"></div>
                <div className="w-2 h-4 bg-gray-600 absolute -right-1 top-2"></div>
                
                {/* Boiling Chai */}
                <div className={cn(
                  "absolute inset-2 top-4 rounded-b-full transition-all duration-300",
                  isPlaying ? "bg-amber-600 animate-pulse" : "bg-amber-800"
                )}>
                  {isPlaying && (
                    <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute text-white animate-ping"
                          style={{ 
                            left: `${i * 8 - 16}px`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: '1s'
                          }}
                        >
                          💨
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              <p className="text-white text-center mt-2">Chai Pot</p>
            </div>

            {/* Glasses */}
            <div className="relative">
              <div className="flex justify-center space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className={cn(
                      "w-4 h-6 bg-gradient-to-b from-transparent to-amber-600 border-2 border-amber-400 rounded-b-lg transition-all duration-300",
                      isPlaying && "animate-pulse"
                    )}
                    style={{ animationDelay: `${i * 0.2}s` }}
                  ></div>
                ))}
              </div>
              <p className="text-white text-center mt-2">Glasses</p>
            </div>
          </div>

          {/* Animation Status */}
          {isPlaying && (
            <div className="text-center">
              <div className="inline-flex items-center space-x-2 bg-white/20 rounded-full px-4 py-2">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white font-semibold">Preparing your chai...</span>
              </div>
            </div>
          )}
        </div>

        {/* Decorative Elements */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {['🧈', '🥛', '🍯', '🌿'].map((emoji, i) => (
            <div
              key={i}
              className="text-4xl text-center hover:scale-110 transition-transform duration-300 cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {emoji}
            </div>
          ))}
        </div>

        {/* Dolly Character */}
        <div className="text-center">
          <div className={cn(
            "text-6xl mb-2 inline-block transition-transform duration-500",
            isPlaying && "animate-bounce"
          )}>
            👨‍🍳
          </div>
          <h3 className="text-2xl font-bold text-amber-200 mb-2">Dolly Chaiwala</h3>
          <p className="text-amber-300 italic">
            {isPlaying ? "Making your perfect chai..." : "Ready to serve the best chai!"}
          </p>
        </div>
      </div>

      {/* Steam Effects */}
      {isPlaying && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute text-2xl animate-ping opacity-60"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 60 + 20}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: '2s'
              }}
            >
              💨
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ChaiStall;
