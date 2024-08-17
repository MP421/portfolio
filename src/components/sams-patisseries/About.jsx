import React from 'react'
import sweetroll from '../../assets/sams-patisseries/sweetroll.jpg'

export default function About() {
  return (
    <section id="about">
      <div className="w-[60%] h-[600px] mx-auto flex items-center justify-between">
        <div className="text-lg flex flex-col gap-5">
          <p className="text-[#B75E38]">ABOUT US</p>
          <p className="text-4xl">Our mission is simple</p>
          <p>
            We believe that every bite should be a moment of pure
            <br/>
            delight, a symphony of taste and texture that transports
            <br/>
            you to a realm of unparalleled pleasure.
          </p>
          <p>
            Step into our world and immerse yourself in the
            <br/>
            enchanting aromas, vibrant colors, and luxurious flavors
            <br/>
            that define Sam's Patisseries.
          </p>
        </div>
        <img src={sweetroll} className="h-[400px] object-cover object-center" alt="" />
      </div>
    </section>
  )
}