import React from 'react'
import Macaron1 from '../../assets/sams-patisseries/macaron-1.jpg'
import Cupcake1 from '../../assets/sams-patisseries/cupcake-1.jpg'
import Donut2 from '../../assets/sams-patisseries/donut-2.jpg'
import Muffin1 from '../../assets/sams-patisseries/muffin-1.jpg'

const Mission = () => {
  return (
    <section className="w-full bg-orange-100 py-28">
      <div className="w-[75%] flex items-center justify-between mx-auto">
        <div className="h-[300px] w-[450px] grid grid-cols-3 grid-rows-2 gap-4">
          <div className="col-span-2">
            <img src={ Macaron1 } alt="" className="h-[150px] w-[300px] object-cover object-center rounded-3xl" />
          </div>
          <div className="col-span-1">
            <img src={ Cupcake1 } alt="" className="h-[150px] w-[150px] object-cover object-center rounded-3xl" />
          </div>
          <div className="col-span-1">
            <img src={ Donut2 } alt="" className="h-[150px] w-[150px] object-cover object-center rounded-3xl" />
          </div>
          <div className="col-span-2">
            <img src={ Muffin1 } alt="" className="h-[150px] w-[300px] object-cover object-center rounded-3xl" />
          </div>
        </div>
        <div className="w-1/2">
          <p className="text-xl font-medium">Our Story</p>
          <p className="mt-3 mb-5 tracking-wider">
            Our mission is simple: to redefine the boundaries of pastry perfection and awaken your senses to a
            world of exquisite flavours. At Sam's Patisserie, we believe that every bite should be a moment of pure
            delight, a symphony of taste and texture that transports you to a realm of unparalleled pleasure. 
          </p>
          <p className="tracking-wider">
            Step into our world and immerse yourself in the enchanting aromas, vibrant colors, and luxurious
            flavors that define Sam's Patisserie.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Mission
