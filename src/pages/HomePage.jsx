import React from 'react';
import Hero from '../components/home-page/Hero';
import Banner from '../components/home-page/Banner';
import Contact from '../components/home-page/Contact';
import Footer from '../components/home-page/Footer';

const HomePage = () => {
  return (
    <section className="font-sansinter" id="home-page-bg">
      <Hero />
      <Banner />
      <Contact />
      <Footer />
    </section>
  )
}

export default HomePage
