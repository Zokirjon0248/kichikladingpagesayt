"use client"

import { useState } from "react"

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [formData, setFormData] = useState({ name: "", phone: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Buyurtma:", formData)
    alert(`Buyurtma qabul qilindi!\nIsm: ${formData.name}\nTelefon: ${formData.phone}`)
    setFormData({ name: "", phone: "" })
    setIsModalOpen(false)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/55 backdrop-blur-sm border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-3 sm:px-6 py-3 sm:py-5 flex items-center justify-between">
          <div className="text-lg sm:text-2xl font-bold text-black tracking-tight">BASICO</div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex items-center gap-1 sm:gap-2 px-4 sm:px-8 py-2 sm:py-3 bg-black text-white rounded-full hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl text-xs sm:text-base"
          >
            Buyurtma berish
          </button>
        </div>
      </header>

      {isModalOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-6 sm:p-8 relative">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            
            <h2 className="text-2xl font-bold text-black mb-6">Buyurtma berish</h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
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
                type="submit"
                className="w-full py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors duration-300 font-medium"
              >
                Yuborish
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  )
}