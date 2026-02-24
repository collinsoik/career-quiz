"use client";

import React, { useEffect, useRef } from "react";
import type { FeedItem } from "@pathfinder/shared";

interface ClassFeedProps {
  items: FeedItem[];
}

const TYPE_STYLES: Record<FeedItem["type"], { icon: string; color: string }> = {
  join: { icon: "\u{1F44B}", color: "text-accent-blue" },
  choice: { icon: "\u{1F914}", color: "text-accent-yellow" },
  milestone: { icon: "\u{2B50}", color: "text-accent-purple" },
  completion: { icon: "\u{1F389}", color: "text-accent-green" },
  stat: { icon: "\u{1F4CA}", color: "text-accent-orange" },
};

function ClassFeed({ items }: ClassFeedProps) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [items.length]);

  return (
    <div className="card-elevated h-[calc(100vh-120px)] flex flex-col sticky top-6">
      <h2 className="text-sm font-semibold text-text-secondary mb-4 uppercase tracking-wider flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse" />
        Live Feed
      </h2>

      <div className="flex-1 overflow-y-auto space-y-2 pr-1">
        {items.length === 0 ? (
          <p className="text-text-disabled text-sm text-center py-8">
            Waiting for activity...
          </p>
        ) : (
          items.map((item) => {
            const style = TYPE_STYLES[item.type] || TYPE_STYLES.stat;
            return (
              <div
                key={item.id}
                className="flex items-start gap-3 bg-surface-tertiary rounded-lg px-3 py-2.5 animate-slide-in-right"
              >
                <span className="text-base flex-shrink-0">{style.icon}</span>
                <div className="flex-1 min-w-0">
                  <p className="text-sm text-text-primary leading-relaxed">
                    {item.text}
                  </p>
                  <p className="text-xs text-text-disabled mt-0.5">
                    {new Date(item.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            );
          })
        )}
        <div ref={bottomRef} />
      </div>
    </div>
  );
}

export default React.memo(ClassFeed);
