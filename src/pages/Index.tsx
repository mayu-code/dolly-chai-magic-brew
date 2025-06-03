
import React, { useState, useEffect } from 'react';
import ChaiStall from '../components/ChaiStall';
import OrderPanel from '../components/OrderPanel';
import { toast } from 'sonner';

const Index = () => {
  const [orderCount, setOrderCount] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleOrderChai = (chaiType: string) => {
    setOrderCount(prev => prev + 1);
    setIsPlaying(true);
    toast.success(`${chaiType} ordered! Dolly is preparing your chai...`);
    
    // Reset animation after 3 seconds
    setTimeout(() => {
      setIsPlaying(false);
      toast.success('Your chai is ready! ☕');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-amber-100 overflow-hidden">
      {/* Header */}
      <div className="text-center py-8 relative">
        <h1 className="text-5xl font-bold text-amber-900 mb-2 animate-fade-in">
          Dolly Chaiwala's Stall
        </h1>
        <p className="text-xl text-amber-700 animate-fade-in">
          ☕ Authentic Indian Chai Experience ☕
        </p>
        <div className="absolute top-4 right-8 bg-white/80 rounded-full px-4 py-2 shadow-lg">
          <span className="text-amber-800 font-semibold">Orders: {orderCount}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 grid lg:grid-cols-3 gap-8">
        {/* Chai Stall */}
        <div className="lg:col-span-2">
          <ChaiStall isPlaying={isPlaying} />
        </div>
        
        {/* Order Panel */}
        <div className="lg:col-span-1">
          <OrderPanel onOrderChai={handleOrderChai} />
        </div>
      </div>

      {/* Floating Steam Animation */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse opacity-20"
            style={{
              left: `${20 + i * 15}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: '3s'
            }}
          >
            💨
          </div>
        ))}
      </div>
    </div>
  );
};

export default Index;
