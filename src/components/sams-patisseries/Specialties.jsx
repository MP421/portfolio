import React from 'react'
import Croissant3 from '../../assets/sams-patisseries/croissant-3.jpg'

const Specialties = () => {
  return (
    <section className="w-[75%] h-[375px] flex items-center justify-between mx-auto border-4 border-yellow-500 bg-orange-50 rounded-2xl overflow-hidden mt-20">
      <div className="w-[40%] p-12">
        <p className="text-lg font-medium">This week's specialty</p>
        <p className="text-lg mt-4 mb-2">Chocolate orange croissant</p>
        <p className="text-md tracking-wide">
          Indulge in our heavenly croissant, where buttery layers of pastry embrace a luscious chocolate orange filling.
          Each bite is an exquisite dance of rich dark chocolate and zesty orange, crowned with delicate chocolate pieces.
          A symphony of flavors that will transport you to patisserie paradise!
        </p>
      </div>
      <div className="w-[60%]">
        <img src={ Croissant3 } alt="" className="w-full h-full object-cover object-center" />
      </div>
    </section>
  )
}

export default Specialties
