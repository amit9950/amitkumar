import { useRef, useEffect } from "react";

export default function ParticlesBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    let particles = [];
    const PARTICLE_COUNT = 60;

    const mouse = {
      x: null,
      y: null,
      radius: 120,
    };

    const colors = ["#00ffb9", "#00bf8f", "#302b63"];

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.baseColor = this.color;
        this.vx = (Math.random() - 0.5) * 0.8;
        this.vy = (Math.random() - 0.5) * 0.8;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 12;
        ctx.shadowColor = this.color;
        ctx.fill();
      }

      update() {
        // Move
        this.x += this.vx;
        this.y += this.vy;

        // Wall bounce
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction
        if (mouse.x && mouse.y) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < mouse.radius) {
            this.color = "#00ffb9";
            this.x -= dx / 15;
            this.y -= dy / 15;
          } else {
            this.color = this.baseColor;
          }
        }

        this.draw();
      }
    }

    function init() {
      particles = [];
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push(new Particle());
      }
    }

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => p.update());
      requestAnimationFrame(animate);
    }

    // Mouse move (desktop only)
    const mouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    resize();
    animate();

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
