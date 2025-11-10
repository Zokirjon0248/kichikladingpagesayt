"use client"

import { useState, useEffect } from "react"

// Modal component - istalgan joyda ishlatish mumkin
export function OrderModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [formData, setFormData] = useState({ name: "", phone: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Buyurtma:", formData)
    alert(`Buyurtma qabul qilindi!\nIsm: ${formData.name}\nTelefon: ${formData.phone}`)
    setFormData({ name: "", phone: "" })
    onClose()
  }

  if (!isOpen) return null

  return (
    <div 
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
        >
          ×
        </button>
        
        <h2 className="text-2xl font-bold text-black mb-6">Buyurtma berish</h2>
        
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ismingiz
            </label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
              placeholder="Ismingizni kiriting"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Telefon raqam
            </label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-transparent outline-none transition"
              placeholder="+998 90 123 45 67"
            />
          </div>
          
          <button
            onClick={handleSubmit}
            className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
          >
            Yuborish
          </button>
        </div>
      </div>
    </div>
  )
}

// BrandInfo component - sizning componentingiz
function BrandInfo() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isModalOpen, setIsModalOpen] = useState(false)

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
    <>
      <section
        id="brand-section"
        className="py-10 sm:py-16 px-3 sm:px-6 relative overflow-hidden bg-linear-to-b from-white to-amber-50"
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
            BASICO 2015-yildan beri O'zbekistonning eng ishonchli brendlangan kiyim ishlab chiqaruvchisidir. Biz sizning
            brend hissiyotingizni ma'naviylashtirish uchun eng yuqori sifatli materiallar va zamonaviy texnologiyalardan
            foydalanib, har bir mahsulotni g'amgin yaratamiz.
          </p>
          <div 
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-1.5 sm:gap-3 px-4 sm:px-8 py-2.5 sm:py-4 bg-black text-white rounded-full font-semibold hover:scale-105 transition-transform duration-300 cursor-pointer text-xs sm:text-base hover:shadow-lg"
          >
            Batafsil ma'lumot olish →
          </div>
        </div>
      </section>

      <OrderModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}

// Demo
export default function Demo() {
  return (
    <div className="min-h-screen bg-white">
      <BrandInfo />
    </div>
  )
}