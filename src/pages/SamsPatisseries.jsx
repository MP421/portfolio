import React from 'react'
import Navbar from '../components/sams-patisseries/Navbar'
import Hero from '../components/sams-patisseries/Hero'
import Mission from '../components/sams-patisseries/Mission'
import Services from '../components/sams-patisseries/Services'
import BestSellers from '../components/sams-patisseries/BestSellers'
import Menu from '../components/sams-patisseries/Menu'
import Specialties from '../components/sams-patisseries/Specialties'
import Reviews from '../components/sams-patisseries/Reviews'
import Newsletter from '../components/sams-patisseries/Newsletter'
import DiscountCode from '../components/sams-patisseries/DiscountCode'
import Footer from '../components/home-page/Footer'

const SamsPatisseries = () => {
  return (
    <section className="font-sansfredoka bg-white text-slate-700">
      <Navbar />
      <Hero />
      <Mission />
      <Services />
      <BestSellers />
      <Menu />
      <Specialties />
      <Reviews />
      <Newsletter />
      <DiscountCode />
      <Footer />
    </section>
  )
}

export default SamsPatisseries
