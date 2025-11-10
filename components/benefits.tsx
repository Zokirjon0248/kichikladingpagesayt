"use client"

import { useState } from "react"
import { Package, Zap, DollarSign, Truck } from "lucide-react"

const benefits = [
  {
    icon: Package,
    title: "Minimal buyurtma",
    description: "50 dona",
    color: "from-slate-100 to-slate-200",
  },
  {
    icon: Zap,
    title: "Tezkor ishlab chiqarish",
    description: "1–15 ish kuni",
    color: "from-amber-50 to-amber-100",
  },
  {
    icon: DollarSign,
    title: "Arzon narxlar",
    description: "65 000 so'm dan",
    color: "from-orange-50 to-orange-100",
  },
  {
    icon: Truck,
    title: "Bepul yetkazib berish",
    description: "O'zbekiston bo'ylab",
    color: "from-zinc-100 to-zinc-200",
  },
]

export default function Benefits() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-10 sm:py-16 bg-linear-to-b from-amber-50 to-white px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black text-center mb-6 sm:mb-10 text-balance animate-fade-in">
          Nima uchun biz?
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {benefits.map((benefit, idx) => {
            const Icon = benefit.icon
            return (
              <div
                key={idx}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`p-4 sm:p-6 rounded-lg sm:rounded-xl bg-linear-to-br ${benefit.color} transition-all duration-300 cursor-pointer animate-slide-up ${
                  hoveredIndex === idx
                    ? "-translate-y-1 sm:-translate-y-2 shadow-md sm:shadow-lg"
                    : "shadow-sm sm:shadow-md"
                }`}
                style={{
                  animationDelay: `${idx * 0.1}s`,
                }}
              >
                <Icon size={28} className="sm:size-9 text-black mb-3 sm:mb-4" />
                <h3 className="text-base sm:text-lg font-bold text-black mb-1">{benefit.title}</h3>
                <p className="text-xs sm:text-sm text-gray-700 font-semibold">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
