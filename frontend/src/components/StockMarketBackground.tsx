import { useEffect, useRef } from "react";

const StockMarketBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Create constellation-like network pattern with stock market theme
    const nodes: Array<{ x: number; y: number; vx: number; vy: number; connections: number[] }> = [];
    const nodeCount = 100;
    const connectionDistance = 180;

    // Generate nodes with velocity for subtle animation
    for (let i = 0; i < nodeCount; i++) {
      nodes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.2,
        vy: (Math.random() - 0.5) * 0.2,
        connections: [],
      });
    }

    // Find connections
    const updateConnections = () => {
      nodes.forEach((node) => {
        node.connections = [];
        nodes.forEach((otherNode, j) => {
          if (node !== otherNode) {
            const dx = node.x - otherNode.x;
            const dy = node.y - otherNode.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < connectionDistance) {
              node.connections.push(j);
            }
          }
        });
      });
    };

    updateConnections();

    // Stock price numbers
    const priceNumbers: Array<{ x: number; y: number; value: number; opacity: number }> = [];
    for (let i = 0; i < 40; i++) {
      priceNumbers.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        value: Math.floor(Math.random() * 900) + 100,
        opacity: Math.random() * 0.3 + 0.1,
      });
    }

    // Draw function
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw connections with gradient effect
      nodes.forEach((node, i) => {
        node.connections.forEach((connIndex) => {
          const connectedNode = nodes[connIndex];
          const dx = connectedNode.x - node.x;
          const dy = connectedNode.y - node.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const opacity = (1 - distance / connectionDistance) * 0.15;
          
          ctx.strokeStyle = `rgba(30, 144, 255, ${opacity})`;
          ctx.lineWidth = 0.5;
          ctx.beginPath();
          ctx.moveTo(node.x, node.y);
          ctx.lineTo(connectedNode.x, connectedNode.y);
          ctx.stroke();
        });
      });

      // Draw nodes with glow effect
      nodes.forEach((node) => {
        // Outer glow
        const gradient = ctx.createRadialGradient(node.x, node.y, 0, node.x, node.y, 4);
        gradient.addColorStop(0, "rgba(30, 144, 255, 0.4)");
        gradient.addColorStop(1, "rgba(30, 144, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(node.x, node.y, 4, 0, Math.PI * 2);
        ctx.fill();

        // Inner dot
        ctx.fillStyle = "rgba(30, 144, 255, 0.6)";
        ctx.beginPath();
        ctx.arc(node.x, node.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      });

      // Draw stock price numbers
      ctx.fillStyle = "rgba(128, 128, 128, 0.15)";
      ctx.font = "9px 'Inter', sans-serif";
      ctx.textAlign = "center";
      priceNumbers.forEach((num) => {
        ctx.globalAlpha = num.opacity;
        ctx.fillText(num.value.toString(), num.x, num.y);
      });
      ctx.globalAlpha = 1;

      // Draw some trend lines (subtle)
      for (let i = 0; i < 5; i++) {
        const startX = Math.random() * canvas.width;
        const startY = Math.random() * canvas.height;
        const endX = startX + (Math.random() - 0.5) * 200;
        const endY = startY + (Math.random() - 0.5) * 200;
        
        ctx.strokeStyle = "rgba(0, 128, 128, 0.1)";
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();
        ctx.setLineDash([]);
      }
    };

    draw();

    // Animate nodes
    let lastTime = 0;
    const animate = (currentTime: number) => {
      if (currentTime - lastTime > 50) { // Throttle to ~20fps for performance
        nodes.forEach((node) => {
          node.x += node.vx;
          node.y += node.vy;
          
          // Bounce off edges
          if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
          if (node.y < 0 || node.y > canvas.height) node.vy *= -1;
          
          // Keep nodes within bounds
          node.x = Math.max(0, Math.min(canvas.width, node.x));
          node.y = Math.max(0, Math.min(canvas.height, node.y));
        });
        
        // Update connections occasionally
        if (Math.random() < 0.1) {
          updateConnections();
        }
        
        draw();
        lastTime = currentTime;
      }
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none"
      style={{ opacity: 0.5 }}
    />
  );
};

export default StockMarketBackground;


