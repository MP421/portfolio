import React from 'react'
import Header from '../components/antur/Header'
import Newsletter from '../components/antur/Newsletter'
import Hero from '../components/antur/Hero'
import Articles from '../components/antur/Articles'
import PlacesToGo from '../components/antur/PlacesToGo'
import ThingsToDo from '../components/antur/ThingsToDo'
import LatestEvents from '../components/antur/LatestEvents'
import Testimonial from '../components/antur/Testimonial'
import FAQ from '../components/antur/FAQ'
import Ankle from '../components/antur/Ankle'
import Footer from '../components/home-page/Footer'

const Antur = () => {
  return (
    <section className="bg-slate-100 text-slate-800 font-sanspoppins">
      <Header />
      <Newsletter />
      <Hero />
      <Articles />
      <PlacesToGo />
      <ThingsToDo />
      <LatestEvents />
      <Testimonial />
      <FAQ />
      <Ankle />
      <Footer />
    </section>
  )
}

export default Antur
