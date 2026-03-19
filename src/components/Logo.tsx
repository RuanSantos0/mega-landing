"use client";

import Image from "next/image";
import { useState } from "react";

interface LogoProps {
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
}

export function Logo({ width = 280, height = 140, className = "", priority = false }: LogoProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div
        className={`font-black text-white tracking-tighter ${className}`}
        style={{ fontSize: "clamp(2rem, 8vw, 5rem)" }}
      >
        MEGA
      </div>
    );
  }

  return (
    <Image
      src="/logo.svg"
      alt="MEGA"
      width={width}
      height={height}
      priority={priority}
      className={`object-contain ${className}`}
      onError={() => setError(true)}
    />
  );
}
