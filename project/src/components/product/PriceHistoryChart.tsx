import React, { useEffect, useState, useRef } from 'react';
import { getPriceHistory } from '../../services/productService';
import { PriceHistoryPoint } from '../../types/product';

interface PriceHistoryChartProps {
  productId: string;
}

const PriceHistoryChart: React.FC<PriceHistoryChartProps> = ({ productId }) => {
  const [priceHistory, setPriceHistory] = useState<PriceHistoryPoint[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<'1m' | '3m' | '6m' | '1y'>('3m');
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const fetchPriceHistory = async () => {
      try {
        setIsLoading(true);
        const data = await getPriceHistory(productId, timeRange);
        setPriceHistory(data);
      } catch (error) {
        console.error('Error fetching price history:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPriceHistory();
  }, [productId, timeRange]);

  useEffect(() => {
    if (priceHistory.length === 0 || !canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Find min and max prices for scaling
    const prices = priceHistory.map(point => point.price);
    const minPrice = Math.min(...prices) * 0.95; // Add some padding
    const maxPrice = Math.max(...prices) * 1.05;
    const priceRange = maxPrice - minPrice;

    // Chart dimensions
    const padding = 40;
    const chartWidth = canvas.width - padding * 2;
    const chartHeight = canvas.height - padding * 2;

    // Draw axes
    ctx.beginPath();
    ctx.strokeStyle = '#e5e7eb'; // gray-200
    ctx.lineWidth = 1;
    
    // X-axis
    ctx.moveTo(padding, canvas.height - padding);
    ctx.lineTo(canvas.width - padding, canvas.height - padding);
    
    // Y-axis
    ctx.moveTo(padding, padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.stroke();

    // Draw price points and lines
    ctx.beginPath();
    ctx.strokeStyle = '#3366FF'; // primary color
    ctx.lineWidth = 2;

    priceHistory.forEach((point, index) => {
      const x = padding + (index / (priceHistory.length - 1)) * chartWidth;
      const y = canvas.height - padding - ((point.price - minPrice) / priceRange) * chartHeight;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.stroke();

    // Add gradient under the line
    const gradient = ctx.createLinearGradient(0, padding, 0, canvas.height - padding);
    gradient.addColorStop(0, 'rgba(51, 102, 255, 0.2)');
    gradient.addColorStop(1, 'rgba(51, 102, 255, 0)');

    ctx.beginPath();
    priceHistory.forEach((point, index) => {
      const x = padding + (index / (priceHistory.length - 1)) * chartWidth;
      const y = canvas.height - padding - ((point.price - minPrice) / priceRange) * chartHeight;
      
      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });
    ctx.lineTo(padding + chartWidth, canvas.height - padding);
    ctx.lineTo(padding, canvas.height - padding);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();

    // Draw data points
    priceHistory.forEach((point, index) => {
      const x = padding + (index / (priceHistory.length - 1)) * chartWidth;
      const y = canvas.height - padding - ((point.price - minPrice) / priceRange) * chartHeight;
      
      ctx.beginPath();
      ctx.arc(x, y, 3, 0, Math.PI * 2);
      ctx.fillStyle = '#ffffff';
      ctx.strokeStyle = '#3366FF';
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();
    });

    // Draw Y-axis labels (price)
    ctx.font = '12px Arial';
    ctx.fillStyle = '#6b7280'; // gray-500
    ctx.textAlign = 'right';
    ctx.textBaseline = 'middle';

    // Price labels
    const numYLabels = 5;
    for (let i = 0; i <= numYLabels; i++) {
      const price = minPrice + (i / numYLabels) * priceRange;
      const y = canvas.height - padding - (i / numYLabels) * chartHeight;
      
      ctx.fillText(`₹${Math.round(price).toLocaleString()}`, padding - 10, y);
    }

    // Draw X-axis labels (dates)
    ctx.textAlign = 'center';
    ctx.textBaseline = 'top';

    // Date labels (show only a few)
    const numXLabels = Math.min(5, priceHistory.length);
    for (let i = 0; i < numXLabels; i++) {
      const index = Math.floor((i / (numXLabels - 1)) * (priceHistory.length - 1));
      const date = new Date(priceHistory[index].date);
      const x = padding + (index / (priceHistory.length - 1)) * chartWidth;
      
      ctx.fillText(date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' }), x, canvas.height - padding + 10);
    }

  }, [priceHistory]);

  // Find lowest and highest prices
  const lowestPrice = priceHistory.length > 0 ? Math.min(...priceHistory.map(p => p.price)) : 0;
  const highestPrice = priceHistory.length > 0 ? Math.max(...priceHistory.map(p => p.price)) : 0;
  const currentPrice = priceHistory.length > 0 ? priceHistory[priceHistory.length - 1].price : 0;

  // Calculate price change
  const firstPrice = priceHistory.length > 0 ? priceHistory[0].price : 0;
  const priceChange = currentPrice - firstPrice;
  const priceChangePercentage = firstPrice > 0 ? (priceChange / firstPrice) * 100 : 0;

  return (
    <div>
      {isLoading ? (
        <div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>
      ) : (
        <>
          {/* Price summary */}
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div className="bg-blue-50 p-3 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Current Price</div>
              <div className="text-lg font-bold text-gray-800">₹{currentPrice.toLocaleString()}</div>
            </div>
            <div className="bg-green-50 p-3 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Lowest Price</div>
              <div className="text-lg font-bold text-green-600">₹{lowestPrice.toLocaleString()}</div>
            </div>
            <div className="bg-red-50 p-3 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Highest Price</div>
              <div className="text-lg font-bold text-red-600">₹{highestPrice.toLocaleString()}</div>
            </div>
          </div>
          
          {/* Price change */}
          <div className="flex items-center mb-4">
            <div className={`text-sm font-medium ${priceChange >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {priceChange >= 0 ? '+' : ''}{priceChange.toLocaleString()} ({priceChangePercentage.toFixed(1)}%)
            </div>
            <div className="text-sm text-gray-500 ml-2">
              in the past {timeRange === '1m' ? 'month' : timeRange === '3m' ? '3 months' : timeRange === '6m' ? '6 months' : 'year'}
            </div>
          </div>
          
          {/* Time range selector */}
          <div className="flex space-x-2 mb-4">
            <button
              onClick={() => setTimeRange('1m')}
              className={`px-3 py-1 text-sm rounded-full ${
                timeRange === '1m'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              1M
            </button>
            <button
              onClick={() => setTimeRange('3m')}
              className={`px-3 py-1 text-sm rounded-full ${
                timeRange === '3m'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              3M
            </button>
            <button
              onClick={() => setTimeRange('6m')}
              className={`px-3 py-1 text-sm rounded-full ${
                timeRange === '6m'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              6M
            </button>
            <button
              onClick={() => setTimeRange('1y')}
              className={`px-3 py-1 text-sm rounded-full ${
                timeRange === '1y'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              1Y
            </button>
          </div>
          
          {/* Chart canvas */}
          <div className="relative h-64">
            <canvas
              ref={canvasRef}
              className="w-full h-full"
              width={800}
              height={400}
            ></canvas>
          </div>
        </>
      )}
    </div>
  );
};

export default PriceHistoryChart;