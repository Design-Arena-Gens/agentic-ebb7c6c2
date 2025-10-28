'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [currentScene, setCurrentScene] = useState(0);
  const [progress, setProgress] = useState(0);

  const scenes = [
    {
      id: 0,
      title: "iPhone 17 Pro Max",
      subtitle: "The Future is Here",
      gradient: "from-purple-600 via-blue-600 to-cyan-500",
    },
    {
      id: 1,
      title: "Revolutionary A19 Bionic Chip",
      subtitle: "3nm+ technology with 50% faster performance",
      gradient: "from-red-600 via-orange-500 to-yellow-500",
    },
    {
      id: 2,
      title: "Periscope Quad Camera System",
      subtitle: "200MP main sensor with 10x optical zoom",
      gradient: "from-green-600 via-teal-500 to-blue-500",
    },
    {
      id: 3,
      title: "ProMotion 240Hz Display",
      subtitle: "6.9\" Super Retina XDR with 3000 nits peak brightness",
      gradient: "from-pink-600 via-purple-500 to-indigo-600",
    },
    {
      id: 4,
      title: "All-Day Battery Life",
      subtitle: "5500mAh with 50W wireless charging",
      gradient: "from-blue-600 via-indigo-600 to-purple-700",
    },
    {
      id: 5,
      title: "Titanium Grade 5 Build",
      subtitle: "Aerospace-grade materials, lighter and stronger",
      gradient: "from-gray-700 via-slate-600 to-zinc-500",
    },
    {
      id: 6,
      title: "Starting at $1,499",
      subtitle: "Pre-order now. Available September 2025",
      gradient: "from-purple-600 via-blue-600 to-cyan-500",
    },
  ];

  useEffect(() => {
    const sceneInterval = setInterval(() => {
      setCurrentScene((prev) => (prev + 1) % scenes.length);
      setProgress(0);
    }, 5000);

    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100));
    }, 100);

    return () => {
      clearInterval(sceneInterval);
      clearInterval(progressInterval);
    };
  }, [scenes.length]);

  const handleSceneClick = (index: number) => {
    setCurrentScene(index);
    setProgress(0);
  };

  return (
    <main className="relative h-screen w-screen overflow-hidden">
      {/* Background gradient animation */}
      <div
        className={`absolute inset-0 bg-gradient-to-br ${scenes[currentScene].gradient} transition-all duration-1000 ease-in-out`}
      />

      {/* Animated grid overlay */}
      <div className="absolute inset-0 opacity-20">
        <div className="h-full w-full" style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-8 text-center">
        <div key={currentScene} className="animate-fade-in">
          <h1 className="mb-6 text-6xl md:text-8xl font-bold tracking-tight animate-slide-up">
            {scenes[currentScene].title}
          </h1>
          <p className="text-2xl md:text-4xl font-light tracking-wide opacity-90 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            {scenes[currentScene].subtitle}
          </p>
        </div>

        {/* Apple-style product visual */}
        <div className="mt-16 animate-zoom-in" style={{ animationDelay: '0.4s' }}>
          <div className="relative w-64 h-96 md:w-80 md:h-[480px]">
            <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white/5 rounded-[50px] backdrop-blur-xl border border-white/30 shadow-2xl">
              <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-6 bg-black/80 rounded-full" />
            </div>
          </div>
        </div>

        {/* Progress bar */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 w-64 md:w-96 h-1 bg-white/20 rounded-full overflow-hidden">
          <div
            className="h-full bg-white transition-all duration-100 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>

        {/* Scene indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
          {scenes.map((scene, index) => (
            <button
              key={scene.id}
              onClick={() => handleSceneClick(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentScene ? 'bg-white w-8' : 'bg-white/40 hover:bg-white/60'
              }`}
              aria-label={`Go to scene ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation controls */}
        <div className="absolute bottom-8 right-8 flex gap-4">
          <button
            onClick={() => setCurrentScene((prev) => (prev - 1 + scenes.length) % scenes.length)}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            aria-label="Previous scene"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => setCurrentScene((prev) => (prev + 1) % scenes.length)}
            className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center"
            aria-label="Next scene"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Apple logo */}
      <div className="absolute top-8 left-8">
        <svg className="w-8 h-8 fill-white opacity-80" viewBox="0 0 24 24">
          <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
        </svg>
      </div>
    </main>
  );
}
