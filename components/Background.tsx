import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  type: 'circle' | 'square' | 'triangle';
}

const Background: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const config = {
      particleCount: 150,
      colors: ['#FACC15', '#F97316', '#FF3333', '#A855F7', '#22d3ee', '#ffffff'],
      types: ['circle', 'square', 'triangle'] as const,
      speed: { min: 1, max: 3 },
      size: { min: 5, max: 12 }
    };

    let particles: Particle[] = [];
    let animationFrameId: number;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createParticle = (): Particle => {
      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height, // Start dispersed vertically or above
        vx: (Math.random() - 0.5) * 2,
        vy: Math.random() * (config.speed.max - config.speed.min) + config.speed.min,
        size: Math.random() * (config.size.max - config.size.min) + config.size.min,
        color: config.colors[Math.floor(Math.random() * config.colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 5,
        type: config.types[Math.floor(Math.random() * config.types.length)]
      };
    };

    const init = () => {
      resize();
      for (let i = 0; i < config.particleCount; i++) {
        particles.push(createParticle());
      }
    };

    const update = () => {
      particles.forEach(p => {
        p.y += p.vy;
        p.x += p.vx + Math.sin(p.y * 0.01); // Add slight sway
        p.rotation += p.rotationSpeed;

        if (p.y > canvas.height + 20) {
          p.y = -20;
          p.x = Math.random() * canvas.width;
          p.vx = (Math.random() - 0.5) * 2;
        }
      });
    };

    const draw = () => {
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(p => {
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rotation * Math.PI / 180);
        ctx.fillStyle = p.color;

        ctx.beginPath();
        if (p.type === 'circle') {
          ctx.arc(0, 0, p.size / 2, 0, Math.PI * 2);
        } else if (p.type === 'square') {
          ctx.rect(-p.size / 2, -p.size / 2, p.size, p.size);
        } else if (p.type === 'triangle') {
          ctx.moveTo(0, -p.size / 2);
          ctx.lineTo(p.size / 2, p.size / 2);
          ctx.lineTo(-p.size / 2, p.size / 2);
        }
        ctx.fill();
        ctx.restore();
      });
    };

    const animate = () => {
      update();
      draw();
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resize);
    init();
    animate();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {/* Dark Gradient Mesh Background */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_rgba(20,20,40,1)_0%,_rgba(5,5,16,1)_100%)]"></div>
      
      {/* Canvas Confetti Layer */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full opacity-70"
      />
    </div>
  );
};

export default Background;