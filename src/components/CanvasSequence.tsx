"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface CanvasSequenceProps {
  frameCount?: number;
}

export default function CanvasSequence({ frameCount = 150 }: CanvasSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const images: HTMLImageElement[] = new Array(frameCount).fill(null);
    const sequence = {
      frame: 0
    };

    let loadedCount = 0;

    // Load first frame immediately to prevent blank screen
    const firstImg = new Image();
    firstImg.src = `/frames/ezgif-frame-001.png`;
    firstImg.onload = () => {
      images[0] = firstImg;
      render();

      // Safari Canvas Crash Prevention: Load fewer frames on mobile
      const isMobile = window.innerWidth <= 768;
      const step = isMobile ? 3 : 1; // Load every 3rd frame on mobile to save 66% RAM

      let i = 1 + step;
      function loadNextBatch() {
        const MathbatchSize = 10;
        let count = 0;
        
        while (i <= frameCount && count < MathbatchSize) {
          const index = i;
          const img = new Image();
          const imgNumber = index.toString().padStart(3, '0');
          img.src = `/frames/ezgif-frame-${imgNumber}.png`;
          img.onload = () => { loadedCount++; };
          images[index - 1] = img;
          i += step;
          count++;
        }
        
        if (i <= frameCount) {
          setTimeout(loadNextBatch, 50);
        }
      }
      loadNextBatch();
    };

    function render() {
      if (!context || !canvas) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      
      // Find the closest loaded frame (necessary because we skip frames on mobile)
      let closestFrame = sequence.frame;
      while (!images[closestFrame] && closestFrame > 0) closestFrame--;
      
      const img = images[closestFrame];
      if (img && img.complete && img.naturalWidth !== 0) {
        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;
        context.drawImage(img, x, y, img.width * scale, img.height * scale);
      }
    }

    const st = gsap.to(sequence, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.5,
      },
      onUpdate: () => {
         requestAnimationFrame(render);
      }
    });

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      st.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, [frameCount]);

  return (
    <canvas
      ref={canvasRef}
      role="img"
      aria-label="3D Background Animation"
      className="fixed top-0 left-0 w-full h-full z-0 object-cover pointer-events-none"
    />
  );
}
