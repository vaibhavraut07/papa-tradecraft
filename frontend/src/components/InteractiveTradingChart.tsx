import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface CandleData {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
}

const InteractiveTradingChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(true);

  // Generate realistic candle data
  const generateCandles = (): CandleData[] => {
    const candles: CandleData[] = [];
    let price = 5000;
    
    for (let i = 0; i < 30; i++) {
      const change = (Math.random() - 0.48) * 100;
      const open = price;
      const close = price + change;
      const high = Math.max(open, close) + Math.random() * 50;
      const low = Math.min(open, close) - Math.random() * 50;
      const volume = Math.random() * 100;
      
      candles.push({ x: i, open, close, high, low, volume });
      price = close;
    }
    return candles;
  };

  const [candles] = useState(generateCandles());
  const maxPrice = Math.max(...candles.map(c => c.high));
  const minPrice = Math.min(...candles.map(c => c.low));
  const priceRange = maxPrice - minPrice;
  
  const maxVolume = Math.max(...candles.map(c => c.volume));

  const normalizePrice = (price: number) => {
    return ((price - minPrice) / priceRange) * 200;
  };

  const getBuySignals = () => [5, 12, 23];
  const getSellSignals = () => [8, 18, 27];

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl p-6 overflow-hidden border border-gray-700 shadow-2xl">
      {/* Animated Grid Background */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"
            style={{ top: `${(i + 1) * 12.5}%` }}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          />
        ))}
      </div>

      {/* Chart Title */}
      <motion.div
        className="absolute top-4 left-6 z-10"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <h3 className="text-white font-bold text-lg">Live Market Analysis</h3>
        <p className="text-gray-400 text-sm">Real-time trading signals</p>
      </motion.div>

      {/* Candlestick Chart */}
      <div className="relative h-[250px] mt-16 flex items-end gap-[2px] px-4">
        {candles.map((candle, index) => {
          const isGreen = candle.close > candle.open;
          const bodyHeight = Math.abs(normalizePrice(candle.close) - normalizePrice(candle.open));
          const bodyTop = normalizePrice(Math.max(candle.open, candle.close));
          const wickTop = normalizePrice(candle.high);
          const wickBottom = normalizePrice(candle.low);

          const isBuySignal = getBuySignals().includes(index);
          const isSellSignal = getSellSignals().includes(index);

          return (
            <motion.div
              key={index}
              className="relative flex-1 cursor-pointer"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ delay: index * 0.03, duration: 0.3, type: "spring" }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scaleX: 1.2, zIndex: 10 }}
            >
              {/* Wick */}
              <div
                className={`absolute left-1/2 -translate-x-1/2 w-[2px] ${isGreen ? 'bg-green-500' : 'bg-red-500'}`}
                style={{
                  bottom: `${wickBottom}px`,
                  height: `${wickTop - wickBottom}px`,
                }}
              />
              
              {/* Body */}
              <motion.div
                className={`absolute left-0 right-0 rounded-sm ${isGreen ? 'bg-green-500' : 'bg-red-500'} ${hoveredIndex === index ? 'opacity-100' : 'opacity-80'}`}
                style={{
                  bottom: `${Math.min(normalizePrice(candle.open), normalizePrice(candle.close))}px`,
                  height: `${Math.max(bodyHeight, 2)}px`,
                }}
                whileHover={{ boxShadow: isGreen ? '0 0 20px rgba(34,197,94,0.8)' : '0 0 20px rgba(239,68,68,0.8)' }}
              />

              {/* Buy Signal */}
              {isBuySignal && (
                <motion.div
                  className="absolute -bottom-8 left-1/2 -translate-x-1/2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                >
                  <motion.div
                    className="bg-green-500 rounded-full p-2 shadow-lg"
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <TrendingUp className="w-4 h-4 text-white" />
                  </motion.div>
                  <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-px h-8 bg-green-500" />
                </motion.div>
              )}

              {/* Sell Signal */}
              {isSellSignal && (
                <motion.div
                  className="absolute -top-8 left-1/2 -translate-x-1/2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1 + index * 0.1, type: "spring" }}
                >
                  <motion.div
                    className="bg-red-500 rounded-full p-2 shadow-lg"
                    animate={{ y: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <TrendingDown className="w-4 h-4 text-white" />
                  </motion.div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-px h-8 bg-red-500" />
                </motion.div>
              )}

              {/* Hover Tooltip */}
              {hoveredIndex === index && (
                <motion.div
                  className="absolute -top-20 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg p-2 shadow-xl whitespace-nowrap z-20"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <p className="text-xs font-semibold">₹{candle.close.toFixed(2)}</p>
                  <p className="text-xs text-muted-foreground">
                    {isGreen ? '+' : ''}{((candle.close - candle.open) / candle.open * 100).toFixed(2)}%
                  </p>
                </motion.div>
              )}
            </motion.div>
          );
        })}
      </div>

      {/* Volume Bars */}
      <div className="relative h-[60px] mt-4 flex items-end gap-[2px] px-4">
        {candles.map((candle, index) => {
          const isGreen = candle.close > candle.open;
          const volumeHeight = (candle.volume / maxVolume) * 50;

          return (
            <motion.div
              key={index}
              className={`flex-1 rounded-t ${isGreen ? 'bg-green-500/50' : 'bg-red-500/50'} ${hoveredIndex === index ? 'opacity-100' : 'opacity-40'}`}
              initial={{ scaleY: 0 }}
              animate={{ scaleY: 1 }}
              transition={{ delay: index * 0.03 + 0.5, duration: 0.3 }}
              style={{ height: `${volumeHeight}px` }}
            />
          );
        })}
      </div>

      {/* Legend */}
      <motion.div
        className="absolute bottom-4 right-6 flex gap-4 text-xs"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="text-gray-300">Buy Signal</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <span className="text-gray-300">Sell Signal</span>
        </div>
      </motion.div>
    </div>
  );
};

export default InteractiveTradingChart;