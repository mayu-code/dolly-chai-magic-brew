
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface OrderPanelProps {
  onOrderChai: (chaiType: string) => void;
}

const chaiTypes = [
  {
    name: 'Classic Masala Chai',
    emoji: '☕',
    price: '₹15',
    description: 'Traditional spiced tea',
    color: 'from-amber-500 to-orange-600'
  },
  {
    name: 'Ginger Chai',
    emoji: '🫖',
    price: '₹18',
    description: 'Strong ginger flavor',
    color: 'from-yellow-500 to-amber-600'
  },
  {
    name: 'Cardamom Chai',
    emoji: '🌿',
    price: '₹20',
    description: 'Aromatic cardamom',
    color: 'from-green-500 to-emerald-600'
  },
  {
    name: 'Kulhad Chai',
    emoji: '🏺',
    price: '₹25',
    description: 'In traditional clay cup',
    color: 'from-red-500 to-orange-600'
  }
];

const OrderPanel: React.FC<OrderPanelProps> = ({ onOrderChai }) => {
  const [selectedChai, setSelectedChai] = useState<string | null>(null);

  return (
    <Card className="bg-gradient-to-b from-orange-100 to-amber-200 border-amber-300 shadow-xl">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl text-amber-900 mb-2">
          🍵 Order Your Chai 🍵
        </CardTitle>
        <p className="text-amber-700">Choose your favorite blend</p>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {chaiTypes.map((chai, index) => (
          <div
            key={chai.name}
            className={cn(
              "relative overflow-hidden rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-lg",
              `bg-gradient-to-r ${chai.color}`,
              selectedChai === chai.name && "ring-4 ring-amber-400 scale-105"
            )}
            onClick={() => setSelectedChai(chai.name)}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-3">
                <span className="text-3xl">{chai.emoji}</span>
                <div>
                  <h3 className="font-bold text-lg">{chai.name}</h3>
                  <p className="text-sm opacity-90">{chai.description}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold">{chai.price}</p>
              </div>
            </div>
            
            {/* Animated Steam */}
            <div className="absolute top-2 right-2">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="absolute text-white animate-bounce opacity-60"
                  style={{ 
                    left: `${i * 8}px`,
                    animationDelay: `${i * 0.2}s` 
                  }}
                >
                  💨
                </div>
              ))}
            </div>
          </div>
        ))}

        {selectedChai && (
          <Button
            onClick={() => onOrderChai(selectedChai)}
            className="w-full bg-gradient-to-r from-amber-600 to-orange-600 hover:from-amber-700 hover:to-orange-700 text-white font-bold py-3 text-lg animate-pulse"
          >
            ☕ Order {selectedChai} ☕
          </Button>
        )}

        {/* Special Offers */}
        <div className="mt-6 p-4 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl text-white text-center animate-pulse">
          <h4 className="font-bold mb-2">🎉 Special Offers 🎉</h4>
          <p className="text-sm">Buy 3 Chai, Get 1 FREE!</p>
          <p className="text-xs opacity-90">Valid till today only</p>
        </div>

        {/* Testimonials */}
        <div className="mt-4 p-3 bg-white/70 rounded-lg">
          <p className="text-sm text-amber-800 italic text-center">
            "Best chai in town! Dolly makes it with so much love ❤️"
          </p>
          <p className="text-xs text-amber-600 text-center mt-1">- Happy Customer</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderPanel;
