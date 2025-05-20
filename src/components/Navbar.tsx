import React from "react";

export default function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 py-4 px-6 sm:px-12 text-sm mb-4">
      <div className="flex justify-between items-center">
        <span className="text-gray-600 font-medium text-lg deu-rengi-text">DEÜ</span>
        <h1 className="text-lg font-semibold text-gray-800 gradient-yazi">Bertuğ Taş</h1>
        <span className="text-gray-600 font-medium text-lg">CSC</span>
      </div>
    </header>
  );
}