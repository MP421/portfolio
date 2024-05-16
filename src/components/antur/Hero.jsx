import React from 'react'
import rafting from '../../assets/antur/img/rafting.jpg';
import canyoning from '../../assets/antur/img/canyoning.jpg';

const Hero = () => {
  return (
    <section className="my-20">
      <div className="flex items-center justify-between w-full mb-20">
        <img src={ rafting } className="w-1/2 h-auto object-cover object-center" alt="TNR Outdoors whitewater rafting Llangollen" />
        <div className="w-1/2">
          <p className="text-2xl text-[#FF1717] font-bold">A Great Adventure Holiday</p>
          <p className="text-lg w-[80%]">For those who want a thrilling, heart-pounding adventure alongside some of the best views you'll find anywhere in the world.</p>
          <p className="text-xs">TNR Outdoors whitewater rafting Llangollen</p>
        </div>
      </div>
      <div className="flex items-center justify-between w-full">
        <div className="w-1/2">
          <p className="text-2xl text-[#FF1717] font-bold">Peer into the other side</p>
          <p className="text-lg">Big jumps, fast slides, ziplines and abseil down waterfalls on the highest mountain across England and Wales.</p>
          <p className="text-xs">Gradient Adventure extreme canyoning Snowdon</p>
        </div>
        <img src={ canyoning } className="w-1/2 h-auto object-cover object-center" alt="Gradient Adventure extreme canyoning Snowdon" />
      </div>
    </section>
  )
}

export default Hero
