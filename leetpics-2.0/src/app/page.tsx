'use client';
import Image from "next/image";
import "./globals.css";
import Navbar from "./components/Navbar";
import { useState, useEffect } from 'react';

export default function Home() {
  const [pixels, setPixels] = useState<boolean[][]>(Array(8).fill(null).map(() => Array(8).fill(false)));

  useEffect(() => {
    const randomizePixels = () => {
      const newPixels = pixels.map(row => 
        row.map(() => Math.random() < 0.25) // 30% chance for each pixel to be visible
      );
      setPixels(newPixels);
    };

    randomizePixels();
    const interval = setInterval(randomizePixels, 1000); // Update every second

    return () => clearInterval(interval);
  }, []);

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
          <h1 className="text-4xl font-bold text-white">
            Batman
          </h1>
        </div>
      </div>
    </div>
  );
}
