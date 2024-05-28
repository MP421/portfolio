import React from 'react'
import Navbar from '../components/rhestr/Navbar'
import Hero from '../components/rhestr/Hero'
import Banner from '../components/rhestr/Banner'
import Install from '../components/rhestr/Install'
import Testimonial from '../components/rhestr/Testimonial'
import Counter from '../components/rhestr/Counter'
import Pricing from '../components/rhestr/Pricing'
import FAQ from '../components/rhestr/FAQ'
import Contact from '../components/rhestr/Contact'
import Footer from '../components/home-page/Footer'

const Rhestr = () => {
  return (
    <section className="bg-indigo-100 text-indigo-950 font-sansmontserrat">
      <Navbar />
      <Hero />
      <Banner />
      <Install />
      <Testimonial />
      <Counter />
      <Pricing />
      <FAQ />
      <Contact />
      <Footer />
    </section>
  )
}

export default Rhestr
