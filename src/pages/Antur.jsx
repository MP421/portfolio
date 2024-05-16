import React from 'react'
import Header from '../components/antur/Header'
import Newsletter from '../components/antur/Newsletter'
import Hero from '../components/antur/Hero'
import PlacesToGo from '../components/antur/PlacesToGo'
import ThingsToDo from '../components/antur/ThingsToDo'
import LatestEvents from '../components/antur/LatestEvents'
import FAQ from '../components/antur/FAQ'

const Antur = () => {
  return (
    <section className="bg-slate-50 text-slate-800 font-sanspoppins">
      <Header />
      <Newsletter />
      <Hero />
      <PlacesToGo />
      <ThingsToDo />
      <LatestEvents />
      <FAQ />
    </section>
  )
}

export default Antur
