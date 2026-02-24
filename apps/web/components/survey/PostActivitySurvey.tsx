"use client";

import { useState } from "react";

interface SurveyAnswers {
  enjoyment: number | null;
  learned: string | null;
  wouldExplore: string | null;
  overall: number | null;
}

const EMOJI_FACES = [
  { value: 1, emoji: "\uD83D\uDE1E", label: "Not great" },
  { value: 2, emoji: "\uD83D\uDE10", label: "Meh" },
  { value: 3, emoji: "\uD83D\uDE42", label: "Good" },
  { value: 4, emoji: "\uD83D\uDE04", label: "Great" },
  { value: 5, emoji: "\uD83E\uDD29", label: "Amazing" },
];

const STARS = [1, 2, 3, 4, 5];

interface PostActivitySurveyProps {
  onComplete: (answers: SurveyAnswers) => void;
}

export default function PostActivitySurvey({ onComplete }: PostActivitySurveyProps) {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState<"forward" | "back">("forward");
  const [answers, setAnswers] = useState<SurveyAnswers>({
    enjoyment: null,
    learned: null,
    wouldExplore: null,
    overall: null,
  });
  const [hoveredStar, setHoveredStar] = useState(0);

  function advance(patch: Partial<SurveyAnswers>) {
    const updated = { ...answers, ...patch };
    setAnswers(updated);
    setDirection("forward");
    if (step < 3) {
      setStep(step + 1);
    } else {
      onComplete(updated);
    }
  }

  function goBack() {
    if (step > 0) {
      setDirection("back");
      setStep(step - 1);
    }
  }

  const slideClass =
    direction === "forward" ? "animate-survey-slide-in" : "animate-survey-slide-back";

  return (
    <div className="card-elevated overflow-hidden">
      <div className="text-center mb-2">
        <p className="text-xs text-text-disabled uppercase tracking-wider">
          Quick feedback &middot; {step + 1} of 4
        </p>
        {/* Progress bar */}
        <div className="mt-3 h-1 bg-surface-tertiary rounded-full overflow-hidden">
          <div
            className="h-full bg-accent-primary rounded-full transition-all duration-500 ease-out"
            style={{ width: `${((step + 1) / 4) * 100}%` }}
          />
        </div>
      </div>

      <div key={step} className={`py-6 ${slideClass}`}>
        {/* Step 0: Enjoyment */}
        {step === 0 && (
          <div className="text-center">
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              How much did you enjoy this activity?
            </h3>
            <div className="flex justify-center gap-3">
              {EMOJI_FACES.map((face) => (
                <button
                  key={face.value}
                  onClick={() => advance({ enjoyment: face.value })}
                  className={`group flex flex-col items-center gap-1.5 p-3 rounded-xl transition-all duration-200 hover:bg-surface-tertiary hover:scale-110 ${
                    answers.enjoyment === face.value
                      ? "bg-surface-tertiary scale-110 ring-2 ring-accent-primary"
                      : ""
                  }`}
                >
                  <span className="text-3xl group-hover:scale-110 transition-transform duration-200">
                    {face.emoji}
                  </span>
                  <span className="text-[10px] text-text-tertiary">{face.label}</span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 1: Learned something new */}
        {step === 1 && (
          <div className="text-center">
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              Did you learn something new about yourself?
            </h3>
            <div className="flex justify-center gap-3">
              {(["Yes!", "Maybe", "Not really"] as const).map((option) => (
                <button
                  key={option}
                  onClick={() => advance({ learned: option })}
                  className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 border ${
                    answers.learned === option
                      ? "border-accent-primary bg-accent-primary/15 text-accent-primary"
                      : "border-border-primary bg-surface-tertiary text-text-secondary hover:border-border-secondary hover:text-text-primary"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 2: Would explore careers */}
        {step === 2 && (
          <div className="text-center">
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              Would you explore any of the careers suggested?
            </h3>
            <div className="flex justify-center gap-3">
              {(["Definitely", "Maybe some", "Probably not"] as const).map((option) => (
                <button
                  key={option}
                  onClick={() => advance({ wouldExplore: option })}
                  className={`px-6 py-3 rounded-xl font-medium text-sm transition-all duration-200 border ${
                    answers.wouldExplore === option
                      ? "border-accent-primary bg-accent-primary/15 text-accent-primary"
                      : "border-border-primary bg-surface-tertiary text-text-secondary hover:border-border-secondary hover:text-text-primary"
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Step 3: Overall rating */}
        {step === 3 && (
          <div className="text-center">
            <h3 className="text-lg font-semibold text-text-primary mb-6">
              Rate this activity overall
            </h3>
            <div className="flex justify-center gap-2 mb-4">
              {STARS.map((star) => {
                const filled = star <= (hoveredStar || answers.overall || 0);
                return (
                  <button
                    key={star}
                    onMouseEnter={() => setHoveredStar(star)}
                    onMouseLeave={() => setHoveredStar(0)}
                    onClick={() => advance({ overall: star })}
                    className="transition-all duration-150 hover:scale-125 p-1"
                  >
                    <svg
                      className={`w-10 h-10 transition-colors duration-150 ${
                        filled ? "text-accent-yellow" : "text-border-secondary"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </button>
                );
              })}
            </div>
            {(hoveredStar > 0 || (answers.overall ?? 0) > 0) && (
              <p className="text-sm text-text-tertiary animate-fade-in">
                {["", "Poor", "Fair", "Good", "Great", "Excellent"][
                  hoveredStar || answers.overall || 0
                ]}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Back button (not on first step) */}
      {step > 0 && (
        <div className="text-center">
          <button
            onClick={goBack}
            className="text-xs text-text-disabled hover:text-text-tertiary transition-colors"
          >
            &larr; Back
          </button>
        </div>
      )}
    </div>
  );
}
