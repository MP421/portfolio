import React from 'react'
import Navbar from '../components/rhestr/Navbar'
import Hero from '../components/rhestr/Hero'
import Features from '../components/rhestr/Features'
import Install from '../components/rhestr/Install'
import Testimonial from '../components/rhestr/Testimonial'
import Counter from '../components/rhestr/Counter'
import Pricing from '../components/rhestr/Pricing'
import FAQ from '../components/rhestr/FAQ'
import Newsletter from '../components/rhestr/Newsletter'
import Footer from '../components/home-page/Footer'

const Rhestr = () => {
  return (
    <section className="bg-indigo-50 text-indigo-950 font-sansmontserrat">
      <Navbar />
      <Hero />
      <Features />
      <Install />
      <Testimonial />
      <Counter />
      <Pricing />
      <FAQ />
      <Newsletter />
      <Footer />
    </section>
  )
}

export default Rhestr