"use client";

import { useState, useCallback } from "react";
import ReactCanvasConfetti from "@/shared/ui/confetti/ReactCanvasConfetti";

export default function SandboxPage() {
  const [isConfettiActive, setIsConfettiActive] = useState(false);

  // 클릭 위치를 기반으로 confetti 효과 생성
  const handleClick = useCallback((e: React.MouseEvent | MouseEvent) => {
    setIsConfettiActive(true);

    const origin = {
      x: e.clientX / window.innerWidth,
      y: e.clientY / window.innerHeight,
    };

    setConfettiConfig({
      origin,
      spread: 60,
    });
  }, []);

  const [confettiConfig, setConfettiConfig] = useState({
    origin: { x: 0.5, y: 0.5 },
    spread: 360,
  });

  return (
    <div className="min-h-screen w-full" onClick={handleClick}>
      <ReactCanvasConfetti
        fire={isConfettiActive}
        onDecay={() => setIsConfettiActive(false)}
        {...confettiConfig}
      />

      {/* 여기에 페이지 콘텐츠 */}
    </div>
  );
}
