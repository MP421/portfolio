import React from 'react'

export default function Navbar() {
  return (
    <section className="bg-[#202738] text-slate-100">
      <div className="w-[75%] h-[100px] mx-auto flex items-center justify-between">
        <p className="text-4xl font-bold font-serifalexbrush">Sam's Patisserie</p>
        <ul className="flex items-center gap-10 font-sansfredoka">
          <li className="hover:underline">
            <a href="#hero">HOME</a>
          </li>
          <li className="hover:underline">
            <a href="#about">OUR STORY</a>
          </li>
          <li className="hover:underline">
            <a href="#gallery">GALLERY</a>
          </li>
          <li className="hover:underline">
            <a href="#menu">MENU</a>
          </li>
          <li className="hover:underline">
            <a href="#reviews">REVIEWS</a>
          </li>
          <li className="hover:underline">
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
        <button className="bg-[#B75E38] h-[40px] w-[150px] rounded-full font-sansfredoka">ORDER</button>
      </div>
    </section>
  )
}