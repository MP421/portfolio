import React from 'react'
import rafting from '../../assets/antur/img/rafting.jpg';
import canyoning from '../../assets/antur/img/canyoning.jpg';

const Hero = () => {
  return (
    <section className="my-10" id="hero">
      <div className="flex flex-col-reverse items-center justify-between w-full md:flex-row">
        <img src={ rafting } className="w-full h-[400px] object-cover object-center md:w-1/2 md:h-[500px]" alt="TNR Outdoors whitewater rafting Llangollen" />
        <div className="w-[80%] mb-6 flex flex-col mx-auto md:w-1/3 md:mb-0">
          <p className="text-2xl text-[#FF1717] font-bold">A Great Adventure Holiday</p>
          <p className="text-lg mt-2 mb-3">For those who want a thrilling, heart-pounding adventure alongside some of the best views you'll find anywhere in the world.</p>
          <p className="text-xs">TNR Outdoors whitewater rafting Llangollen</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between w-full md:flex-row">
        <div className="w-[80%] mt-12 mb-6 flex flex-col mx-auto text-right md:w-1/3 md:mb-0 md:text-left">
          <p className="text-2xl text-[#FF1717] font-bold">Peer into the other side</p>
          <p className="text-lg mt-2 mb-3">Big jumps, fast slides, ziplines and abseil down waterfalls on the highest mountain across England and Wales.</p>
          <p className="text-xs">Gradient Adventure extreme canyoning Snowdon</p>
        </div>
        <img src={ canyoning } className="w-full h-[400px] object-cover object-center md:w-1/2 md:h-[500px]" alt="Gradient Adventure extreme canyoning Snowdon" />
      </div>
    </section>
  )
}

export default Hero
