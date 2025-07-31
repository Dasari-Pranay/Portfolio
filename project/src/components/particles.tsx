import  { useEffect, useRef } from 'react';

// --- Particle Class Definition ---
class Particle {
  x: number;
  y: number;
  directionX: number;
  directionY: number;
  size: number;
  color: string;

  constructor(x: number, y: number, directionX: number, directionY: number, size: number, color: string) {
    this.x = x;
    this.y = y;
    this.directionX = directionX;
    this.directionY = directionY;
    this.size = size;
    this.color = color;
  }

  // Method to draw individual particle
  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
    ctx.fillStyle = this.color;
    ctx.fill();
  }

  // Method to update particle's position
  update(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D) {
    if (this.x > canvas.width || this.x < 0) {
      this.directionX = -this.directionX;
    }
    if (this.y > canvas.height || this.y < 0) {
      this.directionY = -this.directionY;
    }
    this.x += this.directionX;
    this.y += this.directionY;
    this.draw(ctx);
  }
}

// --- Particle Background Component ---
const Particles = ({ className }: { className?: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas ? canvas.getContext('2d') : null;

    if (canvas && ctx) {
      let particlesArray: Particle[];
      let animationFrameId: number;

      const setCanvasSize = () => {
        canvas.width = window.innerWidth;
        // Set height to the full scrollable height of the page
        canvas.height = document.body.scrollHeight;
      };

      const init = () => {
        particlesArray = [];
        const numberOfParticles = (canvas.width * canvas.height) / 9000;
        for (let i = 0; i < numberOfParticles; i++) {
          const size = Math.random() * 1.5 + 1;
          const x = Math.random() * canvas.width;
          const y = Math.random() * canvas.height;
          const directionX = (Math.random() * 0.4) - 0.2;
          const directionY = (Math.random() * 0.4) - 0.2;
          const color = 'rgba(156, 163, 175, 0.5)';
          particlesArray.push(new Particle(x, y, directionX, directionY, size, color));
        }
      };

      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < particlesArray.length; i++) {
          particlesArray[i].update(canvas, ctx);
        }
      };

      const handleResize = () => {
        setCanvasSize();
        init();
      };

      setCanvasSize();
      init();
      animate();

      const resizeObserver = new ResizeObserver(handleResize);
      resizeObserver.observe(document.body);
      
      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
        resizeObserver.disconnect();
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, []);

  return <canvas ref={canvasRef} className={className} />;
};

export default Particles;
