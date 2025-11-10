"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const products = [
  {
    id: 1,
    name: "Futbolka",
    price: "45 000 so'm dan",
    description: "Sifatli va qulaylikli futbolkalar",
    color: "bg-gradient-to-br from-slate-100 to-slate-200",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800&h=800&fit=crop",
  },
  {
    id: 2,
    name: "Polo",
    price: "55 000 so'm dan",
    description: "Premium polo ko'ylaklar",
    color: "bg-gradient-to-br from-amber-50 to-amber-100",
    image: "https://images.unsplash.com/photo-1586363104862-3a5e2ab60d99?w=800&h=800&fit=crop",
  },
  {
    id: 3,
    name: "Hudi",
    price: "95 000 so'm dan",
    description: "Iliq va ulug' hudilar",
    color: "bg-gradient-to-br from-zinc-100 to-zinc-200",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=800&h=800&fit=crop",
  },
  {
    id: 4,
    name: "Kepka",
    price: "35 000 so'm dan",
    description: "Stilistik kepkalar",
    color: "bg-gradient-to-br from-orange-50 to-orange-100",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?w=800&h=800&fit=crop",
  },
  {
    id: 5,
    name: "Plash",
    price: "120 000 so'm dan",
    description: "Zamonaviy plashlar",
    color: "bg-black",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=800&h=800&fit=crop",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % products.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const next = () => {
    setCurrent((prev) => (prev + 1) % products.length)
    setAutoPlay(false)
  }

  const prev = () => {
    setCurrent((prev) => (prev - 1 + products.length) % products.length)
    setAutoPlay(false)
  }

  return (
    <section className="min-h-auto pt-16 sm:pt-20 pb-8 sm:pb-12 bg-linear-to-b from-white via-amber-50 to-amber-50">
      {/* Brand Info */}
      <div className="px-3 sm:px-6 py-4 sm:py-8 text-center max-w-2xl mx-auto">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-black mb-2 sm:mb-4 leading-tight text-balance animate-fade-in">
          Basico
        </h1>
        <p className="text-sm sm:text-lg md:text-xl text-gray-700 mb-4 sm:mb-6 leading-relaxed px-2 animate-slide-up">
          👕 2015-yildan beri brendlangan kiyim ishlab chiqaruvchisi. Biz sizning brendingiz uchun futbolka, polo, hudi,
          kepka, plash va boshqa brendlangan kiyimlarni tayyorlab beramiz!
        </p>
      </div>

      {/* Carousel */}
      <div className="px-3 sm:px-6 pb-6 sm:pb-8">
        <div className="w-full max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 items-start lg:items-center">
            {/* Product Image */}
            <div className="relative h-48 sm:h-64 md:h-72">
              <div
  className={`w-full h-full rounded-lg sm:rounded-xl ${products[current].color} overflow-hidden transition-all duration-500 shadow-lg animate-scale-in`}
>
  <img 
    src={products[current].image} 
    alt={products[current].name}
    className="w-full h-full object-cover"
  />
</div>
              {/* Carousel Indicators */}
              <div className="absolute -bottom-8 sm:-bottom-10 left-0 right-0 flex justify-center gap-1.5">
                {products.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => {
                      setCurrent(idx)
                      setAutoPlay(false)
                    }}
                    className={`h-1.5 rounded-full transition-all ${
                      idx === current ? "w-4 sm:w-6 bg-black" : "w-1.5 bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="flex flex-col gap-3 sm:gap-4 mt-12 sm:mt-0">
              <div className="animate-slide-up">
                <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-black mb-1 sm:mb-2">
                  {products[current].name}
                </h2>
                <p className="text-xs sm:text-base text-gray-700 mb-2 sm:mb-3">{products[current].description}</p>
                <p className="text-xl sm:text-2xl font-bold text-amber-700">{products[current].price}</p>
              </div>

              {/* Navigation Buttons */}
              <div className="flex gap-2 sm:gap-3 pt-2">
                <button
                  onClick={prev}
                  onMouseEnter={() => setAutoPlay(false)}
                  className="p-2.5 sm:p-3 bg-black text-white rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <ChevronLeft size={18} className="sm:w-5 sm:h-5" />
                </button>
                <button
                  onClick={next}
                  onMouseEnter={() => setAutoPlay(false)}
                  className="p-2.5 sm:p-3 bg-black text-white rounded-full hover:scale-110 transition-transform duration-300"
                >
                  <ChevronRight size={18} className="sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
