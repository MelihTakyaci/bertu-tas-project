"use client";
import { reports } from "@/lib/data";

export default function SidebarButtons({ onSelect }: { onSelect: (url: string) => void }) {
  return (
    <div className="flex flex-col gap-4 text-sm text-gray-800 w-full sm:w-60 mt-8">
      {reports.map((item, i) => (
        <button
          key={i}
          className="text-left hover:text-black hover:bg-white hover:shadow-md mr-4 rounded-2xl p-4 transition-shadow font-bold"
          onClick={() => onSelect(item.url)}
        >
          <span className="block font-medium">{item.title}</span>
          <span className="text-xs text-gray-400">{item.year}</span>
        </button>
      ))}
    </div>
  );
}