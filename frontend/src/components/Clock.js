"use client";

import { useEffect, useState } from "react";

export default function Clock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="
        px-4 py-2
        rounded-full
        bg-slate-100 text-slate-900
        dark:bg-slate-800 dark:text-slate-100
        shadow-sm
        font-mono text-sm font-semibold
        tracking-wide
        tabular-nums
        select-none
      "
    >
      {time.toLocaleTimeString()}
    </div>
  );
}
