"use client";

import { INTEREST_CATEGORIES, NormalizedProfile, InterestCategory } from "@pathfinder/shared";

interface InterestRadarProps {
  profile: NormalizedProfile;
}

const SIZE = 380;
const CENTER = SIZE / 2;
const RADIUS = 120;
const LEVELS = 4;

// Hexagonal radar chart using pure SVG
export default function InterestRadar({ profile }: InterestRadarProps) {
  const categories = INTEREST_CATEGORIES;
  const n = categories.length; // 6

  // Get point on the radar for a given category index and value (0-100)
  function getPoint(index: number, value: number): [number, number] {
    const angle = (Math.PI * 2 * index) / n - Math.PI / 2; // Start from top
    const r = (value / 100) * RADIUS;
    return [CENTER + r * Math.cos(angle), CENTER + r * Math.sin(angle)];
  }

  // Create the polygon points for a given level (0-1)
  function getLevelPath(level: number): string {
    return categories
      .map((_, i) => {
        const [x, y] = getPoint(i, level * 100);
        return `${x},${y}`;
      })
      .join(" ");
  }

  // Create the data polygon
  const dataPoints = categories.map((cat, i) => {
    const value = profile[cat.key as InterestCategory];
    return getPoint(i, value);
  });
  const dataPath = dataPoints.map(([x, y]) => `${x},${y}`).join(" ");

  return (
    <div className="flex justify-center">
      <svg width={SIZE} height={SIZE} viewBox={`0 0 ${SIZE} ${SIZE}`} className="max-w-full">
        {/* Grid levels */}
        {Array.from({ length: LEVELS }, (_, i) => {
          const level = (i + 1) / LEVELS;
          return (
            <polygon
              key={i}
              points={getLevelPath(level)}
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-border-primary"
              opacity={0.5}
            />
          );
        })}

        {/* Axis lines */}
        {categories.map((_, i) => {
          const [x, y] = getPoint(i, 100);
          return (
            <line
              key={i}
              x1={CENTER}
              y1={CENTER}
              x2={x}
              y2={y}
              stroke="currentColor"
              strokeWidth="1"
              className="text-border-primary"
              opacity={0.3}
            />
          );
        })}

        {/* Data polygon (filled) */}
        <polygon
          points={dataPath}
          fill="url(#radarGradient)"
          stroke="#7C5CFC"
          strokeWidth="2.5"
          opacity={0.85}
        />

        {/* Data points */}
        {dataPoints.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={4}
            fill={categories[i].color}
            stroke="#0F0F14"
            strokeWidth="2"
          />
        ))}

        {/* Labels */}
        {categories.map((cat, i) => {
          const [x, y] = getPoint(i, 130);
          const value = profile[cat.key as InterestCategory];
          return (
            <g key={cat.key}>
              <text
                x={x}
                y={y}
                textAnchor="middle"
                dominantBaseline="middle"
                className="fill-text-primary"
                fontSize="14"
                fontWeight="600"
              >
                {cat.label}
              </text>
              <text
                x={x}
                y={y + 16}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize="13"
                fontWeight="600"
                fill={cat.color}
              >
                {value}
              </text>
            </g>
          );
        })}

        {/* Gradient def */}
        <defs>
          <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#7C5CFC" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#A78BFA" stopOpacity="0.15" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}
