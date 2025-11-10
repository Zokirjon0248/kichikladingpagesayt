"use client"

import Header from "@/components/header"
import Hero from "@/components/hero"
import Benefits from "@/components/benefits"
import BrandInfo from "@/components/brand-info"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Benefits />
      <BrandInfo />
      <Footer />
    </main>
  )
}
