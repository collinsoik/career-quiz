"use client";

import { STEM_FIELDS } from "@pathfinder/shared";

interface FieldBadgeProps {
  fieldId: string;
  size?: "sm" | "md";
}

export default function FieldBadge({ fieldId, size = "sm" }: FieldBadgeProps) {
  const field = STEM_FIELDS.find((f) => f.id === fieldId);
  if (!field) return null;

  return (
    <span
      className={`inline-flex items-center gap-1 font-medium rounded-full ${
        size === "sm" ? "text-xs px-2.5 py-0.5" : "text-sm px-3 py-1"
      }`}
      style={{
        backgroundColor: field.color + "15",
        color: field.color,
      }}
    >
      <span>{field.icon}</span>
      {field.name}
    </span>
  );
}
