import React from 'react'
import Pastries1 from '../../assets/sams-patisseries/pastries-1.jpg'

const DiscountCode = () => {
  return (
    <section className="w-full h-[400px] relative mx-auto">
      <div className="h-full w-full">
        <img src={ Pastries1 } alt="" className="w-full h-full object-cover object-center" />
      </div>
      <div className="w-full h-full absolute top-0 left-0 bg-white opacity-65"></div>
      <div className="w-full h-full absolute top-0 left-0 flex flex-col items-center justify-center text-2xl font-medium">
        <p className="mb-2">Want to enjoy the finest pastries available for less?</p>
        <p>Enjoy 25% off on everything on Mondays & Wednesdays.</p>
      </div>
    </section>
  )
}

export default DiscountCode
