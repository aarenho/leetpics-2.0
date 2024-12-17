'use client';
import Image from "next/image";
import "./globals.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react';

export default function Home() {
  const [coverage, setCoverage] = useState(25); // percentage of coverage (25%, 50%, 75%, etc.)
  const [pixels, setPixels] = useState<boolean[][]>(Array(8).fill(null).map(() => Array(8).fill(false)));

  useEffect(() => {
    const totalPixels = 64; // 8x8 grid
    const pixelsToFill = Math.floor((coverage / 100) * totalPixels);
    
    // Create array of all possible positions
    const positions = Array.from({ length: totalPixels }, (_, i) => ({
      row: Math.floor(i / 8),
      col: i % 8
    }));
    
    // Shuffle array
    for (let i = positions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [positions[i], positions[j]] = [positions[j], positions[i]];
    }
    
    // Create new grid
    const newPixels = Array(8).fill(null).map(() => Array(8).fill(false));
    
    // Fill first n positions
    for (let i = 0; i < pixelsToFill; i++) {
      const { row, col } = positions[i];
      newPixels[row][col] = true;
    }
    
    setPixels(newPixels);
  }, [coverage]); // Only re-run when coverage changes

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex justify-center items-center">
        <div className="flex flex-col items-center gap-40">
          <div className="relative">
            <Image
              src="/batman.png"  
              width={500}
              height={500}
            />
            <div className="absolute top-0 left-0 w-full h-full">
              {pixels.map((row, i) => (
                row.map((isVisible, j) => (
                  isVisible && (
                    <div
                      key={`${i}-${j}`}
                      className="absolute bg-[#1A1B25] opacity-100"
                      style={{
                        top: `${i * 12.5 - 0.15}%`,
                        left: `${j * 12.5 - 0.15}%`,
                        width: '12.8%',
                        height: '12.8%'
                      }}
                    />
                  )
                ))
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center gap-4">
            <h1 className="text-4xl font-bold text-white">Batman</h1>
            <div className="flex items-center gap-4">
              <button 
                onClick={() => setCoverage(Math.min(coverage + 25, 100))}
                className="px-4 py-2 bg-[#FFA015] text-white rounded hover:bg-[#FF8C00] transition"
              >
                Increase Coverage
              </button>
              <span className="text-white">{coverage}%</span>
              <button 
                onClick={() => setCoverage(Math.max(coverage - 25, 0))}
                className="px-4 py-2 bg-[#FFA015] text-white rounded hover:bg-[#FF8C00] transition"
              >
                Decrease Coverage
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
