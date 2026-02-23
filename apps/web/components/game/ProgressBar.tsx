"use client";

interface ProgressBarProps {
  current: number;
  total: number;
  scenarioTitle: string;
  scenarioIcon: string;
}

export default function ProgressBar({
  current,
  total,
  scenarioTitle,
  scenarioIcon,
}: ProgressBarProps) {
  const percent = Math.round((current / total) * 100);

  return (
    <div className="sticky top-0 z-20 bg-surface-primary/80 backdrop-blur-md border-b border-border-primary px-4 py-3">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <span className="text-lg">{scenarioIcon}</span>
            <span className="text-sm font-medium text-text-primary">
              {scenarioTitle}
            </span>
          </div>
          <span className="text-xs text-text-tertiary font-mono">
            {current}/{total}
          </span>
        </div>
        <div className="w-full h-1.5 bg-surface-tertiary rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-accent-primary to-accent-purple rounded-full transition-all duration-500 ease-out"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
    </div>
  );
}
