import React from 'react'

const Navbar = () => {
  return (
    <section className="w-[75%] flex items-center justify-between mx-auto pt-5">
      <p className="font-serifalexbrush text-4xl">Sam's Patisserie</p>
      <ul className="flex items-center gap-5 text-md">
        <li>
          <a href="#our-story">Our Story</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#best-sellers">Best Sellers</a>
        </li>
        <li>
          <a href="#specialties">This Week's Specialties</a>
        </li>
        <li>
          <a href="#reviews">Reviews</a>
        </li>
        <li>
          <a href="#newsletter">Newsletter</a>
        </li>
      </ul>
      <a href="#menu" className="bg-yellow-500 text-md font-medium px-10 py-2 rounded-full">Explore Our Menu</a>
    </section>
  )
}

export default Navbar
