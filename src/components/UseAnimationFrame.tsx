"use client";

import { useAnimationFrame } from "motion/react";
import { useRef } from "react";

// ✅ Aqui você define que o componente aceita props com className
interface UseAnimationFrameProps {
  className?: string;
}

export default function UseAnimationFrame({ className = "" }: UseAnimationFrameProps) {
  const ref = useRef<HTMLDivElement>(null);

  useAnimationFrame((t) => {
    if (!ref.current) return;

    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 1000)) * -50;
    ref.current.style.transform = `translateY(${y}px) rotateX(${rotate}deg) rotateY(${rotate}deg)`;
  });

  return (
    <div className={`absolute ${className}`}>
      <div className="cube" ref={ref}>
        <div className="side front" />
        <div className="side left" />
        <div className="side right" />
        <div className="side top" />
        <div className="side bottom" />
        <div className="side back" />
      </div>
      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
    return (
        <style>{`
            
        .container {
            perspective: 800px;
            width: 200px;
            height: 200px;
        }

        .cube {
            width: 200px;
            height: 200px;
            position: relative;
            transform-style: preserve-3d;
        }

        .side {
            position: absolute;
            width: 100%;
            height: 100%;
            background-color: red;
            opacity: 0.6;
        }

        .front { 
            transform: rotateY(0deg) translateZ(100px); 
            background-color: rgba(255, 0, 0, 0.6); 
        }
        .right {
            transform: rotateY(90deg) translateZ(100px);
            background-color: rgba(0, 255, 0, 0.6); }
        .back {
            transform: rotateY(180deg) translateZ(100px); 
            background-color: rgba(0, 0, 255, 0.6); }
        .left {
            transform: rotateY(-90deg) translateZ(100px); 
            background-color: rgba(255, 255, 0, 0.6); }
        .top {
            transform: rotateX(90deg) translateZ(100px); 
            background-color: rgba(0, 255, 255, 0.6); }
        .bottom { 
            transform: rotateX(-90deg) translateZ(100px); 
            background-color: rgba(255, 0, 255, 0.6); }

    `}</style>
    )
}
