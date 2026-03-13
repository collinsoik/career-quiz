"use client";

import { useState, useEffect, useCallback } from "react";
import { CAREER_CLUSTERS } from "@pathfinder/shared";

interface Slide {
  type: "title" | "cluster" | "howItWorks" | "final";
  cluster?: (typeof CAREER_CLUSTERS)[number];
}

function buildSlides(): Slide[] {
  const slides: Slide[] = [{ type: "title" }];
  for (const cluster of CAREER_CLUSTERS) {
    slides.push({ type: "cluster", cluster });
  }
  slides.push({ type: "howItWorks" });
  slides.push({ type: "final" });
  return slides;
}

export default function PresentPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = buildSlides();

  const next = useCallback(() => {
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  }, [slides.length]);

  const prev = useCallback(() => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  }, []);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "ArrowRight" || e.key === " " || e.key === "Enter") {
        e.preventDefault();
        next();
      } else if (e.key === "ArrowLeft" || e.key === "Backspace") {
        e.preventDefault();
        prev();
      } else if (e.key === "f" || e.key === "F") {
        document.documentElement.requestFullscreen?.();
      }
    }
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, prev]);

  const slide = slides[currentSlide];

  return (
    <div
      className="min-h-screen bg-[#0a0a12] text-white flex flex-col items-center justify-center relative select-none cursor-pointer"
      onClick={next}
    >
      {/* Slide Content */}
      <div className="flex-1 flex items-center justify-center w-full px-8 py-12">
        {slide.type === "title" && <TitleSlide />}
        {slide.type === "cluster" && slide.cluster && <ClusterSlide cluster={slide.cluster} />}
        {slide.type === "howItWorks" && <HowItWorksSlide />}
        {slide.type === "final" && <FinalSlide />}
      </div>

      {/* Progress dots */}
      <div className="flex items-center gap-1.5 pb-6">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setCurrentSlide(i);
            }}
            className={`w-2 h-2 rounded-full transition-all ${
              i === currentSlide ? "bg-white w-6" : "bg-white/30 hover:bg-white/50"
            }`}
          />
        ))}
      </div>

      {/* Slide counter */}
      <div className="absolute bottom-6 right-8 text-sm text-white/30 font-mono">
        {currentSlide + 1} / {slides.length}
      </div>

      {/* Navigation hint */}
      <div className="absolute bottom-6 left-8 text-xs text-white/20">
        Arrow keys · Click · F for fullscreen
      </div>
    </div>
  );
}

function TitleSlide() {
  return (
    <div className="text-center max-w-3xl">
      <p className="text-6xl mb-6">🧭</p>
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
        Pathfinder
      </h1>
      <p className="text-2xl md:text-3xl text-white/60 font-light">
        Discover Your Future
      </p>
      <p className="text-lg text-white/40 mt-4">
        An interactive career exploration experience
      </p>
    </div>
  );
}

function ClusterSlide({ cluster }: { cluster: (typeof CAREER_CLUSTERS)[number] }) {
  const exampleCareers = cluster.pathways
    .flatMap((p) => p.careers)
    .slice(0, 4);

  const funFacts: Record<string, string> = {
    tech: "The average person spends 7+ hours a day interacting with technology!",
    health: "Healthcare is the largest employment sector in the United States.",
    engineering: "Engineers designed everything from your phone to the bridges you cross.",
    science: "Scientists make about 35,000 decisions a day during experiments!",
    creative: "The creative economy contributes over $900 billion to the US GDP.",
    business: "Nearly 1 in 10 Americans own a small business.",
    trades: "Skilled trades workers can earn six figures without a 4-year degree.",
    law: "There are over 18 million people working in public service jobs in the US.",
    education: "Teachers influence an average of 3,000 students over their career.",
    "health-human": "Social workers help over 7 million families in the US each year.",
    agriculture: "American farmers produce enough food to feed 165 countries.",
    hospitality: "Tourism supports 1 in 10 jobs worldwide!",
    communications: "The average person consumes 34 GB of information per day.",
    manufacturing: "Modern factories use robots, AI, and 3D printers every day.",
  };

  return (
    <div className="text-center max-w-3xl">
      <div
        className="inline-flex items-center justify-center w-24 h-24 rounded-2xl text-5xl mb-6"
        style={{ backgroundColor: cluster.color + "30" }}
      >
        {cluster.emoji}
      </div>
      <h2
        className="text-4xl md:text-5xl font-extrabold mb-4"
        style={{ color: cluster.color }}
      >
        {cluster.name}
      </h2>
      <p className="text-xl text-white/60 mb-8 max-w-xl mx-auto">
        {cluster.description}
      </p>

      {/* Example careers */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {exampleCareers.map((career) => (
          <div
            key={career.id}
            className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5"
          >
            <span className="text-lg">{career.emoji}</span>
            <span className="text-sm text-white/80">{career.title}</span>
          </div>
        ))}
      </div>

      {/* Fun fact */}
      {funFacts[cluster.id] && (
        <div className="bg-white/5 border border-white/10 rounded-xl px-6 py-4 max-w-md mx-auto">
          <p className="text-sm text-white/50 uppercase tracking-wider mb-1">Fun Fact</p>
          <p className="text-base text-white/80">{funFacts[cluster.id]}</p>
        </div>
      )}
    </div>
  );
}

function HowItWorksSlide() {
  const steps = [
    { emoji: "✏️", text: "Enter your name" },
    { emoji: "🎮", text: "Play through 4 adventure scenarios" },
    { emoji: "🤔", text: "Make choices that reveal your interests" },
    { emoji: "📊", text: "See your personalized results" },
    { emoji: "🗺️", text: "Explore careers that match you" },
  ];

  return (
    <div className="text-center max-w-2xl">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-10 text-white">
        How It Works
      </h2>
      <div className="space-y-6">
        {steps.map((step, i) => (
          <div key={i} className="flex items-center gap-4 text-left">
            <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-2xl flex-shrink-0">
              {step.emoji}
            </div>
            <p className="text-xl text-white/80">{step.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function FinalSlide() {
  const url = typeof window !== "undefined" ? window.location.origin : "pathfinder.app";

  return (
    <div className="text-center max-w-2xl">
      <p className="text-6xl mb-6">🚀</p>
      <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
        Your Turn!
      </h2>
      <p className="text-xl text-white/60 mb-8">
        Open your browser and go to:
      </p>
      <div className="bg-white/10 border border-white/20 rounded-2xl px-8 py-6 inline-block mb-8">
        <p className="text-3xl md:text-4xl font-mono font-bold text-accent-primary">
          {url}
        </p>
      </div>
      <p className="text-lg text-white/40">
        Take the quiz, explore careers, and discover your future!
      </p>
    </div>
  );
}
