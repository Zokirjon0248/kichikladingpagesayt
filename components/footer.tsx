"use client"
import { Instagram, Send, Music2, Youtube, Facebook } from "lucide-react"

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com", label: "Instagram" },
  { icon: Send, href: "https://t.me", label: "Telegram" },
  { icon: Music2, href: "https://tiktok.com", label: "TikTok" },
  { icon: Youtube, href: "https://youtube.com", label: "YouTube" },
  { icon: Facebook, href: "https://facebook.com", label: "Facebook" },
]

export default function Footer() {
  return (
    <footer className="bg-linear-to-t from-amber-50 to-white border-t border-amber-200 py-8 sm:py-12 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <p className="text-sm sm:text-lg text-gray-700 mb-4 sm:mb-6 font-medium">
            Ijtimoiy tarmoqlarda bizni kuzating!
          </p>
          <div className="flex justify-center gap-3 sm:gap-6 flex-wrap">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-2 sm:p-3 rounded-full bg-amber-100 text-black hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-110 hover:shadow-lg"
                >
                  <Icon size={18} className="sm:w-5 sm:h-5" />
                </a>
              )
            })}
          </div>
          <p className="text-xs sm:text-sm text-gray-500 mt-6 sm:mt-8">
            © 2015-2025 BASICO. Barcha huquqlar himoyalangan.
          </p>
        </div>
      </div>
    </footer>
  )
}
