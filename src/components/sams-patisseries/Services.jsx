import React from 'react'
import Bunt1 from '../../assets/sams-patisseries/bunt-1.jpg'
import Cookie1 from '../../assets/sams-patisseries/cookie-1.jpg'
import Donut3 from '../../assets/sams-patisseries/donut-3.jpg'

const Services = () => {
  return (
    <section className="w-[75%] flex flex-col items-center justify-between mx-auto my-24" id="services">
      <p className="text-lg font-medium border-b-4 border-yellow-500 pb-3">Services</p>
      <ul className="w-full flex items-center justify-between gap-12 mt-12">
        <li className="w-1/3 h-[300px] flex flex-col items-center border-4 border-yellow-500 rounded-3xl overflow-hidden shadow-lg">
          <img src={ Bunt1 } alt="" className="w-full h-[230px] object-cover object-center" />
          <p className="py-6 font-medium">Custom Cakes</p>
        </li>
        <li className="w-1/3 h-[300px] flex flex-col items-center border-4 border-yellow-500 rounded-3xl overflow-hidden shadow-lg">
          <img src={ Cookie1 } alt="" className="w-full h-[230px] object-cover object-center" />
          <p className="py-6 font-medium">Daily Delicacies</p>
        </li>
        <li className="w-1/3 h-[300px] flex flex-col items-center border-4 border-yellow-500 rounded-3xl overflow-hidden shadow-lg">
          <img src={ Donut3 } alt="" className="w-full h-[230px] object-cover object-center" />
          <p className="py-6 font-medium">Exceptional Events</p>
        </li>
      </ul>
    </section>
  )
}

export default Services
