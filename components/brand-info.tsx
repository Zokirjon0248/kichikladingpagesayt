"use client"

import { useEffect, useState } from "react"

export default function BrandInfo() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const section = document.getElementById("brand-section")
      if (!section) return

      const rect = section.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section
      id="brand-section"
      className="py-10 sm:py-16 px-3 sm:px-6 relative overflow-hidden bg-gradient-to-b from-white to-amber-50"
    >
      {/* Dynamic Light Effect */}
      <div
        className="absolute inset-0 pointer-events-none transition-all duration-300"
        style={{
          background: `radial-gradient(circle 400px at ${mousePos.x}% ${mousePos.y}%, rgba(251, 191, 36, 0.08), transparent 80%)`,
        }}
      />

      <div className="max-w-3xl mx-auto relative z-10 text-center animate-fade-in">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-4 sm:mb-6 leading-tight text-balance">
          Professional brend — professional mahsulot
        </h2>
        <p className="text-sm sm:text-lg md:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8 text-pretty px-2">
          BASICO 2015-yildan beri O\'zbekistonning eng ishonchli brendlangan kiyim ishlab chiqaruvchisidir. Biz sizning
          brend hissiyotingizni ma\'naviylashtirish uchun eng yuqori sifatli materiallar va zamonaviy texnologiyalardan
          foydalanib, har bir mahsulotni g\'amgin yaratamiz.
        </p>
        <div className="inline-flex items-center gap-1.5 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-4 bg-black text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer text-xs sm:text-base hover:shadow-lg">
          Batafsil ma'lumot olish →
        </div>
      </div>
    </section>
  )
}
