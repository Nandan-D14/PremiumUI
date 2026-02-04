import React, { useEffect, useRef } from 'react';

/**
 * NebulaSwirl: A custom canvas animation that creates a glowing, 
 * swirling light trail.
 */
export const NebulaSwirl = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    // Configuration for the swirl
    const particles: { x: number, y: number, age: number }[] = [];
    const particleCount = 60; // Number of points in the tail
    
    // Resize handler
    const resizeCanvas = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.clientWidth;
        canvas.height = canvas.parentElement.clientHeight;
      } else {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }
    };
    
    // Use ResizeObserver with debounce for performance
    const debouncedResize = debounce(resizeCanvas, 200);

    const resizeObserver = new ResizeObserver(() => {
      debouncedResize();
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    } else {
      window.addEventListener('resize', debouncedResize);
    }

    resizeCanvas();

    // Animation Loop
    const render = () => {
      // Fade effect for trails: Draw a semi-transparent black rectangle over previous frame
      ctx.fillStyle = 'rgba(5, 5, 5, 0.1)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Calculate position based on sine/cosine for smooth organic movement
      time += 0.015;
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      
      // Create a complex Lissajous-like curve
      const radiusX = Math.min(canvas.width, canvas.height) * 0.35;
      const radiusY = Math.min(canvas.width, canvas.height) * 0.25;
      
      const x = centerX + Math.cos(time) * radiusX + Math.sin(time * 2.3) * 100;
      const y = centerY + Math.sin(time * 1.2) * radiusY + Math.cos(time * 3.1) * 50;

      // Add new point to head
      particles.push({ x, y, age: 0 });

      // Remove old points
      if (particles.length > particleCount) {
        particles.shift();
      }

      // Draw the glowing path
      if (particles.length > 1) {
        ctx.beginPath();
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';

        ctx.moveTo(particles[0].x, particles[0].y);
        // Draw quadratic bezier curve for smoothness
        for (let i = 1; i < particles.length - 1; i++) {
          const xc = (particles[i].x + particles[i + 1].x) / 2;
          const yc = (particles[i].y + particles[i + 1].y) / 2;
          ctx.quadraticCurveTo(particles[i].x, particles[i].y, xc, yc);
        }

        // Draw outer glow (simulated with wide semi-transparent stroke)
        // This replaces costly shadowBlur
        ctx.strokeStyle = 'rgba(200, 255, 255, 0.2)';
        ctx.lineWidth = 30;
        ctx.stroke();

        // Draw inner core
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.lineWidth = 4;
        ctx.stroke();
      }
      
      // Draw the "head" (bright spot)
      const head = particles[particles.length - 1];
      if (head) {
        const gradient = ctx.createRadialGradient(head.x, head.y, 0, head.x, head.y, 40);
        gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
        gradient.addColorStop(0.5, 'rgba(100, 255, 255, 0.5)');
        gradient.addColorStop(1, 'rgba(0, 0, 0, 0)');
        
        ctx.fillStyle = gradient;
        // Removed costly shadowBlur, relying on radial gradient and CSS blur
        ctx.beginPath();
        ctx.arc(head.x, head.y, 20, 0, Math.PI * 2);
        ctx.fill();
      }

      animationFrameId = window.requestAnimationFrame(render);
    };

    render();

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', debouncedResize);
      window.cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      className={`absolute inset-0 z-0 pointer-events-none w-full h-full ${className || ''}`}
      style={{ filter: 'blur(8px)' }} // Extra blur for that soft "smoke" look
    />
  );
};

// Simple debounce utility
function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return function (...args: Parameters<T>) {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      func(...args);
    }, wait);
  };
}