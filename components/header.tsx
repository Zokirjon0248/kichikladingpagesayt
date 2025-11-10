"use client"
import { ChevronRight } from "lucide-react"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/55 backdrop-blur-sm border-b border-gray-300">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-5 flex items-center justify-between">
        <div className="text-lg sm:text-2xl font-bold text-black tracking-tight">BASICO</div>
        <button className="flex items-center gap-1 sm:gap-2 px-4 sm:px-8 py-2 sm:py-3 bg-black text-white rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl text-xs sm:text-base">
          Buyurtma berish
          <ChevronRight size={16} className="sm:w-5 sm:h-5" />
        </button>
      </div>
    </header>
  )
}
