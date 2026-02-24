"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-surface-primary text-text-primary">
      <div className="text-center space-y-4 p-8">
        <h2 className="text-2xl font-bold">Something went wrong</h2>
        <p className="text-text-secondary">Don&apos;t worry, your progress is saved.</p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-accent-primary hover:bg-accent-primary/80 rounded-xl font-medium transition-colors"
        >
          Try Again
        </button>
        <p className="text-sm text-text-tertiary">
          Or <a href="/" className="underline hover:text-accent-primary transition-colors">go back home</a>
        </p>
      </div>
    </div>
  );
}
