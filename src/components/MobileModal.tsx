"use client";
import { useEffect } from "react";

export default function MobileModal({ url, onClose }: { url: string; onClose: () => void }) {
  useEffect(() => {
    const esc = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", esc);
    return () => document.removeEventListener("keydown", esc);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-md p-4 max-w-lg w-full">
        <iframe src={url} className="w-full h-64" allowFullScreen />
        <button onClick={onClose} className="mt-4 text-sm text-blue-500">Kapat</button>
      </div>
    </div>
  );
}