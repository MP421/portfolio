import React from 'react'
import Cupcake1 from '../../assets/sams-patisseries/cupcake-2.jpg'
import Donut1 from '../../assets/sams-patisseries/donut-1.jpg'
import Croissant1 from '../../assets/sams-patisseries/croissant-1.jpg'

const BestSellers = () => {
  return (
    <section className="w-full h-[550px] flex flex-col items-center justify-between mx-auto relative" id="best-sellers">
      <div className="w-full h-full absolute top-0 left-0">
        <img src={ Cupcake1 } alt="" className="w-full h-full object-cover object-center" />
      </div>
      <div className="w-full h-full bg-white absolute top-0 left-0 opacity-60"></div>
      <div className="w-[60%] absolute flex flex-col items-center justify-center mx-auto my-12">
        <p className="text-lg font-medium border-b-4 border-[#D8658A] inline mb-10">Best Sellers</p>
        <ul className="w-full flex items-center justify-between">
          <li className="w-[45%] bg-slate-50 rounded-3xl overflow-hidden flex flex-col items-center justify-center shadow-lg border-4 border-[#D8658A]">
            <img src={ Donut1 } alt="" className="w-full h-[250px] object-cover object-center" />
            <p className="font-medium py-6">An eclectic selection of donuts</p>
          </li>
          <li className="w-[45%] bg-slate-50 rounded-3xl overflow-hidden flex flex-col items-center justify-center shadow-lg border-4 border-[#D8658A]">
            <img src={ Croissant1 } alt="" className="w-full h-[250px] object-cover object-center" />
            <p className="font-medium py-6">The classic croissant</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default BestSellers
