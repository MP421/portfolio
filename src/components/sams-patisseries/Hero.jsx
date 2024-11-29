import React from 'react'
import home from '../../assets/sams-patisseries/home.jpg'

export default function Hero() {
  return (
    <section className="w-full h-[750px] bg-cover bg-center relative" style={{ backgroundImage: `url(${home})` }} id="hero">
      <div className="w-1/2 h-full absolute top-0 left-0 text-slate-50 bg-[#b75e38a6] backdrop-blur-md flex flex-col items-end justify-center gap-16 text-right pr-8">
        <p className="font-medium text-5xl">
          The first choice
          <br/>
          in mornings
        </p>
        <p className="text-xl">
          Indulge in the exquisite artistry of our high
          <br/>
          end patisserie, where handcrafted confections
          <br/>
          blend French elegance with tantalizing flavors
          <br/>
          to create a symphony of sweetness.
        </p>
        <p className="text-4xl">OPEN 6AM DAILY</p>
      </div>
    </section>
  )
}
