import React from 'react'
import Navbar from '../components/sams-patisseries/Navbar'
import Hero from '../components/sams-patisseries/Hero'
import About from '../components/sams-patisseries/About'
import Team from '../components/sams-patisseries/Team'
import Menu from '../components/sams-patisseries/Menu'
import Gallery from '../components/sams-patisseries/Gallery'
import Reviews from '../components/sams-patisseries/Reviews'
import Ankle from '../components/sams-patisseries/Ankle'
import Footer from '../components/home-page/Footer'

const SamsPatisseries = () => {
  return (
    <section className="font-sansfrancoisone bg-slate-50 text-slate-600">
      <Navbar />
      <Hero />
      <About />
      <Team />
      <Menu />
      <Gallery />
      <Reviews />
      <Ankle />
      <Footer />
    </section>
  )
}

export default SamsPatisseries
