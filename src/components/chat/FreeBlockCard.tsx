"use client";

import type { FreeBlock } from "@/types";

interface FreeBlockProps {
  block: FreeBlock;
}

export function FreeBlockCard({ block }: FreeBlockProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-teal/20 bg-teal-subtle px-4 py-3 max-w-[520px]">
      <span className="text-2xl">🌿</span>
      <div>
        <p className="text-[14px] font-semibold text-teal">
          Free from {block.startTime} – {block.endTime}
        </p>
        <p className="text-[12px] text-teal/70 mt-0.5">
          {block.date} · {block.duration}
        </p>
      </div>
    </div>
  );
}
