import React from 'react'
import NavBar from './NavBar'
import HeroDescription from './HeroDescription'

export default function Hero() {
  return (
    <section className="bg-hero-background h-screen bg-cover bg-center relative flex items-center text-white">
        <NavBar />
        <HeroDescription />
    </section>
  )
}
