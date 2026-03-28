'use client';

import { MessageCircle } from 'lucide-react';

export function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/917079490430"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 animate-bounce-in"
    >
      <div className="relative">
        {/* Pulsing Background */}
        <div className="absolute inset-0 bg-green-500 rounded-full animate-pulse-glow" />
        
        {/* Main Button */}
        <button className="relative w-14 h-14 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-smooth text-white">
          <MessageCircle size={28} fill="currentColor" />
        </button>

        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          Chat with us
          <div className="absolute top-full right-3 w-2 h-2 bg-gradient-to-r from-green-500 to-emerald-600 transform rotate-45" />
        </div>
      </div>
    </a>
  );
}
