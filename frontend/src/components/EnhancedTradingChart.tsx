import { motion } from "framer-motion";
import { useState, useEffect, useMemo } from "react";
import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "@/components/ui/card";

interface CandleData {
  x: number;
  open: number;
  close: number;
  high: number;
  low: number;
  volume: number;
  time: string;
}

interface TradingChartProps {
  symbol?: string;
  timeframe?: string;
  signalType?: "mixed" | "bullish" | "bearish"; // New prop to control signal types
}

const EnhancedTradingChart = ({ symbol = "NIFTY BANK", timeframe = "5", signalType = "mixed" }: TradingChartProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  // Initialize price based on signalType to show appropriate trend
  const getInitialPrice = () => {
    if (signalType === "bullish") return 57950;
    if (signalType === "bearish") return 57650;
    return 57778.95; // mixed - neutral
  };
  
  const [currentPrice, setCurrentPrice] = useState(getInitialPrice());
  const [priceChange, setPriceChange] = useState(signalType === "bullish" ? 45.25 : signalType === "bearish" ? -45.25 : -38.55);
  const [priceChangePercent, setPriceChangePercent] = useState(signalType === "bullish" ? 0.08 : signalType === "bearish" ? -0.08 : -0.07);

  // Generate realistic candle data with Indian market prices
  const generateCandles = (): CandleData[] => {
    const candles: CandleData[] = [];
    let price = 57800;
    const times = ["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00"];
    
    for (let i = 0; i < 30; i++) {
      const change = (Math.random() - 0.48) * 200;
      const open = price;
      const close = price + change;
      const high = Math.max(open, close) + Math.random() * 150;
      const low = Math.min(open, close) - Math.random() * 150;
      const volume = Math.random() * 1000000 + 500000;
      const timeIndex = Math.floor(i / 4) % times.length;
      
      candles.push({ 
        x: i, 
        open, 
        close, 
        high, 
        low, 
        volume,
        time: times[timeIndex] || `${9 + Math.floor(i / 4)}:00`
      });
      price = close;
    }
    return candles;
  };

  const [candles] = useState(generateCandles());
  
  // Memoize price calculations to prevent re-renders
  const { maxPrice, minPrice, priceRange, maxVolume } = useMemo(() => {
    const max = Math.max(...candles.map(c => c.high));
    const min = Math.min(...candles.map(c => c.low));
    return {
      maxPrice: max,
      minPrice: min,
      priceRange: max - min,
      maxVolume: Math.max(...candles.map(c => c.volume))
    };
  }, [candles]);

  // Memoize price scale labels - show only 3 values to reduce clutter
  const priceScaleLabels = useMemo(() => {
    return [...Array(3)].map((_, i) => {
      const price = maxPrice - (priceRange / 2) * i;
      return {
        id: `price-scale-${i}`,
        value: price.toFixed(0)
      };
    });
  }, [maxPrice, priceRange]);

  // Animate price updates - respect signalType for trend direction
  useEffect(() => {
    const interval = setInterval(() => {
      const lastCandle = candles[candles.length - 1];
      // For bullish, keep changes positive; for bearish, keep negative; for mixed, allow both
      let change;
      if (signalType === "bullish") {
        change = Math.abs((Math.random() - 0.3) * 50); // Mostly positive
      } else if (signalType === "bearish") {
        change = -Math.abs((Math.random() - 0.3) * 50); // Mostly negative
      } else {
        change = (Math.random() - 0.5) * 50; // Mixed
      }
      
      setCurrentPrice(prev => prev + change);
      setPriceChange(change);
      setPriceChangePercent((change / lastCandle.close) * 100);
    }, 3000);

    return () => clearInterval(interval);
  }, [candles, signalType]);

  const normalizePrice = (price: number) => {
    return ((price - minPrice) / priceRange) * 250;
  };

  // Get signals based on signalType prop
  const getBuySignals = () => {
    if (signalType === "bearish") return [];
    if (signalType === "bullish") return [4, 9, 14, 19, 24]; // More bullish signals
    return [3, 10, 17, 24]; // mixed - balanced bullish signals
  };

  const getSellSignals = () => {
    if (signalType === "bullish") return [];
    if (signalType === "bearish") return [7, 13, 20, 26];
    return [7, 15, 21]; // mixed - balanced bearish signals
  };

  // Determine trend color
  const trendColor = priceChange >= 0 ? "text-green-400" : "text-red-400";
  const trendBg = priceChange >= 0 ? "bg-green-500/20" : "bg-red-500/20";

  return (
    <Card className="relative w-full bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 border border-gray-700 shadow-2xl overflow-visible">
      {/* Header with Symbol and Price Info */}
      <div className="p-3 md:p-4 border-b border-gray-700">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-2 gap-2">
          <div>
            <h3 className="text-white font-bold text-sm sm:text-base md:text-lg">{symbol} - {timeframe} - NSE</h3>
            <p className="text-gray-400 text-xs">Live Market Analysis</p>
          </div>
          <div className="text-left sm:text-right">
            <div className={`text-xl sm:text-2xl font-bold ${trendColor}`}>
              ₹{currentPrice.toFixed(2)}
            </div>
            <div className={`text-xs sm:text-sm ${trendColor}`}>
              {priceChange >= 0 ? '+' : ''}{priceChange.toFixed(2)} ({priceChangePercent >= 0 ? '+' : ''}{priceChangePercent.toFixed(2)}%)
            </div>
          </div>
        </div>
        <div className="flex flex-wrap gap-2 sm:gap-4 text-xs text-gray-400 mt-2">
          <span key="open">O: ₹{candles[0]?.open.toFixed(2)}</span>
          <span key="high">H: ₹{maxPrice.toFixed(2)}</span>
          <span key="low">L: ₹{minPrice.toFixed(2)}</span>
          <span key="close">C: ₹{candles[candles.length - 1]?.close.toFixed(2)}</span>
          <span key="volume">Vol: {(maxVolume / 1000000).toFixed(2)}M</span>
        </div>
      </div>

      {/* Chart Area */}
      <div className="relative h-[280px] sm:h-[340px] md:h-[400px] p-2 md:p-4 pb-8 md:pb-12">
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-20" style={{ bottom: '60px' }}>
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

        {/* Price Scale - Fixed to prevent duplication - Only 3 values */}
        <div className="absolute right-2 sm:right-4 top-4 bottom-20 flex flex-col justify-between text-xs text-gray-400 hidden sm:block z-10">
          {priceScaleLabels.map((label) => (
            <span key={label.id} className="block whitespace-nowrap text-right">
              ₹{label.value}
            </span>
          ))}
        </div>

        {/* Candlestick Chart */}
        <div className="relative h-[180px] sm:h-[220px] md:h-[280px] mt-2 md:mt-4 mb-12 md:mb-16 flex items-end gap-[1px] sm:gap-[2px] px-2 sm:px-4">
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
                    className="absolute left-1/2 -translate-x-1/2 z-20"
                    style={{ bottom: '-60px' }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  >
                    <motion.div
                      className="bg-green-500 rounded-full p-2 shadow-lg mx-auto"
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <TrendingUp className="w-4 h-4 text-white" />
                    </motion.div>
                    <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-px h-8 bg-green-500" />
                    <div className="absolute top-10 left-1/2 -translate-x-1/2 bg-green-500/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-30">
                      BULLISH
                    </div>
                  </motion.div>
                )}

                {/* Sell Signal */}
                {isSellSignal && (
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 z-20"
                    style={{ top: '-60px' }}
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 1 + index * 0.1, type: "spring" }}
                  >
                    <motion.div
                      className="bg-red-500 rounded-full p-2 shadow-lg mx-auto"
                      animate={{ y: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <TrendingDown className="w-4 h-4 text-white" />
                    </motion.div>
                    <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-px h-8 bg-red-500" />
                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-red-500/90 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-30">
                      BEARISH
                    </div>
                  </motion.div>
                )}

                {/* Hover Tooltip */}
                {hoveredIndex === index && (
                  <motion.div
                    className="absolute -top-24 left-1/2 -translate-x-1/2 bg-card border border-border rounded-lg p-3 shadow-xl z-20 min-w-[150px]"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <p className="text-xs font-semibold mb-1">Time: {candle.time}</p>
                    <p className="text-xs font-semibold">₹{candle.close.toFixed(2)}</p>
                    <p className={`text-xs ${isGreen ? 'text-green-400' : 'text-red-400'}`}>
                      {isGreen ? '+' : ''}{((candle.close - candle.open) / candle.open * 100).toFixed(2)}%
                    </p>
                    <p className="text-xs text-gray-400 mt-1">Vol: {(candle.volume / 1000).toFixed(0)}K</p>
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Volume Bars */}
        <div className="relative h-[40px] sm:h-[50px] mt-2 mb-2 flex items-end gap-[1px] sm:gap-[2px] px-2 sm:px-4">
          {candles.map((candle, index) => {
            const isGreen = candle.close > candle.open;
            const volumeHeight = (candle.volume / maxVolume) * 40;

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
      </div>

      {/* Legend */}
      <div className="p-3 md:p-4 border-t border-gray-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div className="flex flex-wrap gap-3 sm:gap-4 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-gray-300">Buy Signal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-gray-300">Sell Signal</span>
          </div>
        </div>
        <div className={`px-2 py-1 sm:px-3 sm:py-1 rounded-full ${trendBg} ${trendColor} text-xs font-semibold`}>
          {priceChange >= 0 ? 'BULLISH' : 'BEARISH'} TREND
        </div>
      </div>
    </Card>
  );
};

export default EnhancedTradingChart;

