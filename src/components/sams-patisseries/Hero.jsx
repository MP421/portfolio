import React from 'react'
import Croissant2 from '../../assets/sams-patisseries/croissant-2.jpg'

const Hero = () => {
  return (
    <section className="w-[75%] flex items-center justify-between mx-auto my-32">
      <div className="w-1/2">
        <p className="text-yellow-500 text-6xl font-medium">The first choice in pastry</p>
        <p className="text-lg tracking-wider mt-8 mb-14">
          Indulge in the exquisite artistry of our high-end patisserie, where handcrafted confections
          blend French elegance with tantalizing flavors to create a symphony of sweetness.
        </p>
        <a href="#menu" className="flex items-center justify-center bg-yellow-500 text-xl font-medium w-[300px] py-3 rounded-full">
          <p className="mr-20">Order Now</p>
          <i className="fa-solid fa-arrow-right"></i>
        </a>
      </div>
      <div className="w-1/2">
        <img src={ Croissant2 } alt="A delicious croissant" className="object-cover object-center" />
      </div>
    </section>
  )
}

export default Hero
